"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

function SubscriptionProvider() {
  const { data: session } = useSession();
  // TODO: Get the subscription ID from Firestore
  useEffect(() => {}), [];
  return <div>SubscriptionProvider</div>;
}

export default SubscriptionProvider;
