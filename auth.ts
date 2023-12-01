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
  //Make the user Google Account appear inside the firebase authentication
  callbacks: {
    //It receives an object with properties session and token.
    //If there is a session.user object and a token.sub property exists, it assigns the token.sub value to session.user.id.

    session: async ({ session, token }) => {
      if (session?.user) {
        if (token.sub) {
          session.user.id = token.sub;
        }
      }
      return session;
    },
    //If a user object is present, it updates the JWT's subject (token.sub) with the user's ID
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  // Change the strategy to "jwt"
  session: {
    strategy: "jwt",
  },
  // syncronise all of authentication method
  adapter: FirestoreAdapter(adminDb),
} satisfies NextAuthOptions;
