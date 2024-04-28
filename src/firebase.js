// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "code-team-next.firebaseapp.com",
  projectId: "code-team-next",
  storageBucket: "code-team-next.appspot.com",
  messagingSenderId: "381562410448",
  appId: "1:381562410448:web:c5e54adeb68fbaf1f315d5"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);