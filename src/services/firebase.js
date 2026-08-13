// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// Replace these with your actual Firebase config values
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// The app must not crash when the build has no Firebase environment
// variables (e.g. deployment without configured env vars): instead of
// throwing in initializeApp, run without a backend and warn in the console.
const missing = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => `VITE_FIREBASE_${key.replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase()}`);

const hasConfig = missing.length === 0;

if (!hasConfig) {
  console.warn(
    `Firebase config incomplete (missing: ${missing.join(", ")}). ` +
      "The app runs without a backend. Add the environment variables to the build.",
  );
}

// Initialize Firebase
const app = hasConfig ? initializeApp(firebaseConfig) : null;

// Initialize Firebase services
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const storage = app ? getStorage(app) : null;
export { app };

export default app;