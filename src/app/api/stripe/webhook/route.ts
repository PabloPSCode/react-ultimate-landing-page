import { getFirestoreClient } from "@/libs/firebaseAdmin";
import stripe from "@/libs/stripe";
import { Timestamp } from "firebase-admin/firestore";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret || !signature) {
    return new NextResponse("Stripe webook secret or signature not found", {
      status: 400,
    });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error("Stripe signature verification failed:", error);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status === "paid") {
      try {
        const firestore = getFirestoreClient();
        const paidUsersCollection = firestore.collection("paid_users");

        const name =
          session.customer_details?.name ??
          session.metadata?.name ??
          "Unknown name";
        const email =
          session.customer_details?.email ??
          session.customer_email ??
          session.metadata?.email ??
          "Unknown email";
        const plan = session.metadata?.plan ?? "unknown";

        const existingRecord = await paidUsersCollection
          .where("checkoutSessionId", "==", session.id)
          .limit(1)
          .get();

        if (existingRecord.empty) {
          await paidUsersCollection.add({
            name,
            email,
            plan,
            checkoutSessionId: session.id,
            amountTotal: session.amount_total,
            currency: session.currency,
            createdAt: Timestamp.now(),
          });
          console.log(`Saved paid user for session ${session.id}`);
        } else {
          console.log(
            `paid_users entry already exists for session ${session.id}, skipping`
          );
        }
      } catch (error) {
        console.error("Failed to persist paid user to Firestore:", error);
        return new NextResponse("Failed to persist paid user", {
          status: 500,
        });
      }
    } else {
      console.log(
        `Checkout session ${session.id} completed with status ${session.payment_status}`
      );
    }
  } else {
    console.log(`Unhandled event type ${event.type}`);
  }

  return new NextResponse(null, { status: 200 });
}
