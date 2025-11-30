import stripe from "@/libs/stripe";

const soloPlan = process.env.NEXT_PUBLIC_SOLO_PLAN_PRICE_ID;
const teamPlan = process.env.NEXT_PUBLIC_TEAM_PLAN_PRICE_ID;

export async function POST(req: Request) {
  const { plan } = await req.json();

  if (soloPlan === undefined || teamPlan === undefined) {
    return new Response("Product IDs are not defined", { status: 500 });
  }

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: plan === "solo" ? soloPlan : teamPlan,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      metadata: {
        plan: plan,
      },
    });
    return Response.json({ checkoutData: checkoutSession });
  } catch (error) {
    console.log("Error creating checkout session:", error);
    return new Response("Failed to create checkout session", { status: 500 });
  }
}
