// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC5oI3inVnhD51snCwzhwzZI8ZE5_C0CM",
  authDomain: "mechanicalwebsite-59a7c.firebaseapp.com",
  projectId: "mechanicalwebsite-59a7c",
  storageBucket: "mechanicalwebsite-59a7c.appspot.com",
  messagingSenderId: "731071862361",
  appId: "1:731071862361:web:08d3ac71d2bfc354798348",
  measurementId: "G-9CDWN40HGK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
