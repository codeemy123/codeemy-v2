// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC-gRavFAEcnxsNfMqw_xUwTEzvVKuuTaA",
  authDomain: "simple-project-f4869.firebaseapp.com",
  projectId: "simple-project-f4869",
  storageBucket: "simple-project-f4869.firebasestorage.app",
  messagingSenderId: "1031482573599",
  appId: "1:1031482573599:web:0c683937461b5e9cede62a",
  measurementId: "G-85GBZZL4ZR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
