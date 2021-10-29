// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-DWW-Ufl5EYJVmlJKLxRJN2T5tZ376AY",
  authDomain: "knewbiecoding-4a0f9.firebaseapp.com",
  projectId: "knewbiecoding-4a0f9",
  storageBucket: "knewbiecoding-4a0f9.appspot.com",
  messagingSenderId: "399847914427",
  appId: "1:399847914427:web:9b09052e2dd07e04f6e29e",
  measurementId: "G-9WCQBGQ85N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);