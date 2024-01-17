// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjs-blog-754e1.firebaseapp.com",
  projectId: "nextjs-blog-754e1",
  storageBucket: "nextjs-blog-754e1.appspot.com",
  messagingSenderId: "689454466418",
  appId: "1:689454466418:web:b4f48ff835ef73a60009eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);