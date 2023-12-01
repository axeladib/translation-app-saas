import { initFirestore } from "@auth/firebase-adapter";
import admin from "firebase-admin";
import { initialize } from "next/dist/server/lib/render-server";

let app;

//Prevent duplicated admin auth
if (!admin.apps.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  });
}

//initialize admin database
const adminDb = initFirestore({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
});

// initialize admin auth
const adminAuth = admin.auth(app);

export { adminDb, adminAuth };

//adminAuth : allow to create custom token for user
//adminDb : modified firestore database without restriction
