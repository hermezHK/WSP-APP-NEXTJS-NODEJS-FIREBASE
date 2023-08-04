import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// config database server user 
const firebaseConfig = {
    apiKey: "AIzaSyBXVxwpH1mCU97LA3jd1Np13gNAhyVQXnY",
    authDomain: "whatsapp-clone-3f5b6.firebaseapp.com",
    projectId: "whatsapp-clone-3f5b6",
    storageBucket: "whatsapp-clone-3f5b6.appspot.com",
    messagingSenderId: "301071004192",
    appId: "1:301071004192:web:984c98550575d9ea4dc245",
    measurementId: "G-VKK9NVW97L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);