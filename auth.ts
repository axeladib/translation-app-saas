import { FirestoreAdapter } from "@auth/firebase-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { adminDb } from "./firebase-admin";
import { adminAuth } from "./firebase-admin";
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
  //TODO: This code provide the custom jwt token id inside the firebase Auth
  //Make the user Google Account appear inside the firebase authentication
  callbacks: {
    //It receives an object with properties session and token.
    //If there is a session.user object and a token.sub property exists, it assigns the token.sub value to session.user.id.

    session: async ({ session, token }) => {
      if (session?.user) {
        if (token.sub) {
          //token.sub from jwt replace the user id inside the firebase
          session.user.id = token.sub;

          //create the custom firebase token
          const firebaseToken = await adminAuth.createCustomToken(token.sub);
          //replace the firebase token to the custom that we create from jwt
          session.firebaseToken = firebaseToken;
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
