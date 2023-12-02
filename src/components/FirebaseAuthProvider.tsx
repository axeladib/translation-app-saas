"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { Session } from "next-auth";
import { auth } from "../../firebase";
import { signInWithCustomToken } from "@firebase/auth";

//Higher order component to passed in firebaseToken to all components that needs it
async function syncFirebaseAuth(session: Session) {
  if (session && session.firebaseToken) {
    try {
      await signInWithCustomToken(auth, session.firebaseToken);
    } catch (error) {
      console.log("Error signing the firebase custom token :", error);
    }
  } else {
    auth.signOut();
  }
}

function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  //Extract session from data
  const { data: session } = useSession();
  //useEffect use for connecting local to outside API
  useEffect(() => {
    if (!session) return;
    syncFirebaseAuth(session);
  }, [session]);
  return <>{children}</>;
}

export default FirebaseAuthProvider;
