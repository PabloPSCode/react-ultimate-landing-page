import { useState } from "react";

export const useStripe = () => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  async function createStripeCheckout(plan: "solo" | "team") {
    try {
      setIsCheckingOut(true);
      const response = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan }),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to create checkout session");
      }
      const { checkoutData } = await response.json();

      if (checkoutData?.url) {
        window.location.href = checkoutData.url;
        return;
      }

      throw new Error("Missing checkout session URL from Stripe");
    } catch (error) {
      console.error("Error creating Stripe checkout:", error);
      throw error;
    } finally {
      setIsCheckingOut(false);
    }
  }
  return { createStripeCheckout, isCheckingOut };
};
