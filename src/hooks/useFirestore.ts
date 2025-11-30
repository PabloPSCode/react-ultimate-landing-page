export const useFireStore = () => {
  const fetchUserValid = async (userEmail: string) => {
    const response = await fetch("/api/firestore/fetch-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || "Failed to fetch user data");
    }

    const isUserPaidSubscription = await response.json();
    return isUserPaidSubscription;
  };

  return { fetchUserValid };
};
