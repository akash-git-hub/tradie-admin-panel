import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBRXZ5uBbWTnx9FgjMggHPqKF3p1UTHZxo",
    authDomain: "tradieappco-ee687.firebaseapp.com",
    projectId: "tradieappco-ee687",
    storageBucket: "tradieappco-ee687.firebasestorage.app",
    messagingSenderId: "791466779133",
    appId: "1:791466779133:web:71e7bc828589f272d47994",
    measurementId: "G-6SFNT5ZV79"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();