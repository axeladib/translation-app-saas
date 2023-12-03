"use client";

import { subscriptionRef } from "@/lib/converters/Subscription";
import { useSubscriptionStore } from "@/store/store";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  //Get the useSubscriptionStore hook from store
  //Allow to passed any state with typesafe from TypeScript
  const setSubscription = useSubscriptionStore(
    (state) => state.setSubscription
  );
  // TODO: Get the subscription ID from Firestore
  useEffect(() => {
    if (!session) return;
    //listen to listener for realtime update
    //check the userId in "subscriptions" path and validate it
    return onSnapshot(
      subscriptionRef(session?.user.id),
      (snapshot) => {
        if (snapshot.empty) {
          console.log("User has NO subscription");
          //TODO: If user does not have any subscription
          setSubscription(null);
        } else {
          console.log("User has subscription");
          //TODO: set Subscription when the subcription is exist
          //Access the property declare at the subscriptionConverter at converter folder
          setSubscription(snapshot.docs[0].data());
        }
      },
      (error) => {
        console.log("Error getting document:", error);
      }
    );
  }),
    [session, setSubscription];
  return <>{children}</>;
}

export default SubscriptionProvider;
