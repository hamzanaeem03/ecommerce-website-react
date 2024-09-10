// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDuT6Z92HI1jOH-i0sl-kByogym7byzEWM",
  authDomain: "e-commerce-2deeb.firebaseapp.com",
  projectId: "e-commerce-2deeb",
  storageBucket: "e-commerce-2deeb.appspot.com",
  messagingSenderId: "868387772697",
  appId: "1:868387772697:web:dc6c744327e0632a408d88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
