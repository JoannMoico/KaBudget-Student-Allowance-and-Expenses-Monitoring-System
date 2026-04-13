import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDU_PxTTb0QVI1UdRcANoAk22N4sgTcpYA",
  authDomain: "kabudget-fed01.firebaseapp.com",
  projectId: "kabudget-fed01",
  storageBucket: "kabudget-fed01.firebasestorage.app",
  messagingSenderId: "255258435286",
  appId: "1:255258435286:web:63cf18afea1aa6ab8bb377",
  measurementId: "G-W05XXZYQ83"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;