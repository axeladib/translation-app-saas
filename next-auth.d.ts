//This is extending the session of callback in auth.ts
import NextAuth, { DefaultSession } from "next-auth";

// Adding the user.id
declare module "next-auth" {
  interface Session {
    //Declare the firebaseToken
    firebaseToken?: string;
    // Adding the the id property to user
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
