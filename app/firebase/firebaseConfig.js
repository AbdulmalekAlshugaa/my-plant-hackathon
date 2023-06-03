// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBn5aoXG7uH4lH6TrRjCWNOXb3Sc1U1Qtc",
    authDomain: "myauction-94add.firebaseapp.com",
    projectId: "myauction-94add",
    storageBucket: "myauction-94add.appspot.com",
    messagingSenderId: "281600341422",
    appId: "1:281600341422:web:c3348a9308fa5d8945843f",
    measurementId: "G-D60RBNZF5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export default {
    app,
    auth,
    db
}