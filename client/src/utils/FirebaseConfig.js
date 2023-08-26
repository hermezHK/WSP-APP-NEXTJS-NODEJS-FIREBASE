import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// config database server user 
const firebaseConfig = {
    apiKey: "YOUR-API-KEY",
    authDomain: "YOUR-AUTH-DOMAIN",
    projectId: "YOUR-ID-PROJECT",
    storageBucket: "YOUR-ID-STORAGE-BUCKET",
    messagingSenderId: "YOUR-ID-SENDER",
    appId: "YOUR-APP-ID",
    measurementId: "YOUR-MEASUREMENT-ID ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);