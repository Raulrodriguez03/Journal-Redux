// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiYoVrCKYWErAY0pz6KRzJJRnVMRHkAyY",
  authDomain: "react-journal-49e77.firebaseapp.com",
  projectId: "react-journal-49e77",
  storageBucket: "react-journal-49e77.appspot.com",
  messagingSenderId: "342635699897",
  appId: "1:342635699897:web:27cdccb4b967eb75408568",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
