import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7MEsCNX5qcP7gaPP9atwrQLE2xbiZaN0",
  authDomain: "crwn-db-8e526.firebaseapp.com",
  projectId: "crwn-db-8e526",
  storageBucket: "crwn-db-8e526.appspot.com",
  messagingSenderId: "295725380886",
  appId: "1:295725380886:web:e86240f0d77f151a0b4c37",
  measurementId: "G-PXDKE77XN0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider)

// export default app