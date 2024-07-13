// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6f26c.firebaseapp.com",
  projectId: "mern-auth-6f26c",
  storageBucket: "mern-auth-6f26c.appspot.com",
  messagingSenderId: "577878419888",
  appId: "1:577878419888:web:5b2782f18215865cc1ce75",
  measurementId: "G-WVYMKG8HJY"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
