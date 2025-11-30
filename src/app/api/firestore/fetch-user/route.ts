import { getFirestoreClient } from "@/libs/firebaseAdmin";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userEmail =
      typeof body === "string" ? body : typeof body?.email === "string" ? body.email : null;

    if (!userEmail) {
      return new NextResponse("Email is required", { status: 400 });
    }

    const fireStore = getFirestoreClient();
    const paidUsersCollection = fireStore.collection("paid_users");

    const userSnapshot = await paidUsersCollection
      .where("email", "==", userEmail)
      .limit(1)
      .get();

    const isUserPaidSubscription = !userSnapshot.empty;
    return NextResponse.json(isUserPaidSubscription);
  } catch (error) {
    console.error("Error fetching user data:", error);
    return new NextResponse("Failed to fetch user data", { status: 500 });
  }
}
