"use client";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useSession } from "next-auth/react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useSubscriptionStore } from "@/store/store";
import ManageAccountButton from "./ManageAccountButton";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  //TODO: Implementing Pro Feature Restriction
  const subscription = useSubscriptionStore((state) => state.subscription);
  const isSubscribed =
    subscription?.status === "active" && subscription?.role === "pro";
  const isLoadingSubscription = subscription === undefined;
  // TODO: Implementing Checkout wirh Stripe
  const createCheckoutSession = async () => {
    if (!session) return;
    setLoading(true);
    // push a document into the firestore db
    //Add new document with auto-generated id
    const docRef = await addDoc(
      // "customers" is a path in Firestore that store the Stripe's customers details
      collection(db, "customers", session.user.id, "checkout_sessions"),
      {
        //price API ID from stripe for Pro Membership
        price: "price_1OJ7P0BFlG5pJlzI6eUefuAC",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );
    // IMPORTANT: Listen to the webhook URL at the "customers/:id" path at FireStore
    // This is when the listener of Stripe happened
    // This link wil create the checkout session for the customers
    return onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if (error) {
        alert(`An error occured: ${error.message}`);
        setLoading(false);
      }

      if (url) {
        window.location.assign(url);
        setLoading(false);
      }
    });
    //TODO: redirect user to checkout page
  };
  return (
    <div className="flex flex-col space-y-2">
      {/* TODO: If subscribe show me user is subscribe */}
      <div
        // When testing Stripe Checkout always use 42 repeatedly

        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 foucs-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80"
      >
        {isSubscribed ? (
          <ManageAccountButton />
        ) : // Only for subcribe user
        isLoadingSubscription || loading ? (
          <LoadingSpinner />
        ) : (
          <button onClick={() => createCheckoutSession()}>Sign Up</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutButton;
