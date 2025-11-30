import stripe from "@/libs/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret || !signature) {
      return new NextResponse("Stripe webook secret or signature not found", {
        status: 400,
      });
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;

        if (event.data.object.payment_status === "paid") {
          console.log("User paid the subscription.");
        }
        console.log("Checkout session completed", session);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.log("Error at trying to listen to Stripe webhook: ", error);
    return new NextResponse(null, { status: 500 });
  }
}
