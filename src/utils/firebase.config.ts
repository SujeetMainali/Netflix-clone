import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDVRnLUf84sqEiuelHn19kE4JPyVxy5T0c",
  authDomain: "netflix-project-aff60.firebaseapp.com",
  projectId: "netflix-project-aff60",
  storageBucket: "netflix-project-aff60.appspot.com",
  messagingSenderId: "811781459700",
  appId: "1:811781459700:web:847ffe8206f9b2a31c18a1",
  measurementId: "G-1Z6F7RSPXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);