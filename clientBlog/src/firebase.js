// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "academic-b6371.firebaseapp.com",
  projectId: "academic-b6371",
  storageBucket: "academic-b6371.appspot.com",
  messagingSenderId: "502185468196",
  appId: "1:502185468196:web:6cad128de877ee198753b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);