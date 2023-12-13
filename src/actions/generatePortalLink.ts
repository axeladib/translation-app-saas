"use server";
//FIXME : All of this error
// Cant redirect to the manage billing protal
//Create a billing portal to allow customers to alter their payment details
//TODO : Implementing server actions
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { headers } from "next/headers";
import Stripe from "stripe";
import { adminDb } from "../../firebase-admin";
import { redirect } from "next/navigation";

//initialise the Stripe service
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export const generatePortalLink = async () => {
  //get the session
  const session = await getServerSession(authOptions);
  //get the header host
  const host = headers().get("host");

  if (!session?.user.id) return console.error("No user id exist");

  const {
    user: { id },
  } = session;

  const returnUrl =
    process.env.NODE_ENV === "development"
      ? `http://${host}/register`
      : `https://${host}/register`;

  //access the customers path

  const doc = await adminDb.collection("customers").doc(id).get();

  if (!doc.data) return console.error("No customer with this id", id);

  const stripeId = doc.data()!.stripeId;

  //modify their membership

  const stripeSession = await stripe.billingPortal.sessions.create({
    customer: stripeId,
    return_url: returnUrl,
  });
  redirect(stripeSession.url);
};
