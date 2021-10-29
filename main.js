// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnYMN1lRkMl2gShO5DxsAQdjAqLoeBexM",
  authDomain: "knewbiecoding-0.firebaseapp.com",
  projectId: "knewbiecoding-0",
  storageBucket: "knewbiecoding-0.appspot.com",
  messagingSenderId: "841018314391",
  appId: "1:841018314391:web:3da1f13653578da31063d2",
  measurementId: "G-R0V6QRHMDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);