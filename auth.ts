import { FirestoreAdapter } from "@auth/firebase-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { adminDb } from "./firebase-admin";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

//TODO: Store authetication object that we expect
export const authOptions: NextAuthOptions = {
  //This is for Google Auth configuration
  providers: [
    GoogleProvider({
      clientId: googleClientId || "",
      clientSecret: googleClientSecret || "",
    }),
  ],
  // Change the strategy to "jwt"
  session: {
    strategy: "jwt",
  },
  // syncronise all of authentication method
  adapter: FirestoreAdapter(adminDb)
} satisfies NextAuthOptions;
