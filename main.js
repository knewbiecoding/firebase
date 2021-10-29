// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEHHrcn8x5QhubkmN6ZF8o8XwZWdQzRG0",
  authDomain: "knew-20270.firebaseapp.com",
  projectId: "knew-20270",
  storageBucket: "knew-20270.appspot.com",
  messagingSenderId: "833735305087",
  appId: "1:833735305087:web:308429e1e8805fe0745c4a",
  measurementId: "G-SQ3TGL9YX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);