import { initializeApp } from "firebase/app";  
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5hYfiLv9Yf8aRFAGFJRXQvSRNfCirqOg",
    authDomain: "tutorial-curd.firebaseapp.com",
    projectId: "tutorial-curd",
    storageBucket: "tutorial-curd.appspot.com",
    messagingSenderId: "749688864709",
    appId: "1:749688864709:web:8b1ad897b1f25b69df95ac",
    measurementId: "G-5NZKV15EN5"
  };

  const app=initializeApp(firebaseConfig);
  export const db=getFirestore(app)