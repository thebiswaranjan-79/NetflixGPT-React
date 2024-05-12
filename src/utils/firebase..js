// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw-wQztGfNshib1nC_uH32pZc--4nYMBQ",
  authDomain: "netflixgpt-6bbab.firebaseapp.com",
  projectId: "netflixgpt-6bbab",
  storageBucket: "netflixgpt-6bbab.appspot.com",
  messagingSenderId: "510744219398",
  appId: "1:510744219398:web:47572c426637be087e9887",
  measurementId: "G-0ET0K676GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();