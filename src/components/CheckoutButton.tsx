"use client";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useSession } from "next-auth/react";
import { useState } from "react";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const createCheckoutSession = async () => {
    if (!session) return;
    setLoading(true);
    //TODO: push a document into the firestore db
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
    //TODO: ... stripe extension on firebase will create checkout session
    return onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      //if error detected stop loading to checkout pgae
      if (error) {
        // show an error to customer
        alert(`An error occurred ${error.message}`);
        setLoading(false);
      }

      //if Stripe Checkout exist redirect it to the Checkout Session Page
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
      <button
        // When testing Stripe Checkout always use 42 repeatedly
        onClick={() => createCheckoutSession()}
        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 foucs-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80"
      >
        {loading ? "loading..." : "Sign Up"}
      </button>
    </div>
  );
}

export default CheckoutButton;
