// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase, get, ref as realTimeDBRef,child } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:
    "https://react-quiz-170c8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-quiz-170c8",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const firebaseRealtimeDB = getDatabase(app);
export { app, firebaseAuth,firebaseRealtimeDB, realTimeDBRef, get, child };
