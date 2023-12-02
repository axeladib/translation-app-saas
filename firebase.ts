import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-VfEQzPG6ylXQQdfho1-9o4nCHOLK_ek",
  authDomain: "test-translator-saas-yt.firebaseapp.com",
  projectId: "test-translator-saas-yt",
  storageBucket: "test-translator-saas-yt.appspot.com",
  messagingSenderId: "948977769224",
  appId: "1:948977769224:web:8915ef62c88fe1d3aeeabd",
};
//Prevent duplicated initialize app
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
//initalize auth, database and function of firebase
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);
    
export { auth, db, functions };
