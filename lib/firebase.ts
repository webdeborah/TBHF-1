import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const hasConfig =
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.appId;

let app: FirebaseApp;
let db: Firestore;
let auth: Auth;

if (hasConfig) {
  app = getApps().length
    ? (getApps()[0] as FirebaseApp)
    : initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
} else {
  app = null as unknown as FirebaseApp;
  db = null as unknown as Firestore;
  auth = null as unknown as Auth;
}

export { app, db, auth };
