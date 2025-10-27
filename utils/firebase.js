import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD5YDPQ7LQYCo_dHlD56wSDImZpegnalpw",
  authDomain: "signup-login-8a642.firebaseapp.com",
  projectId: "signup-login-8a642",
  storageBucket: "signup-login-8a642.firebasestorage.app",
  messagingSenderId:"211987622027",
  appId: "1:211987622027:web:ca1a35738cab2f01db0c8e"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);