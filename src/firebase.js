// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBIdBz5aI14mALjLDF3z_1VczgKQLVokY",
    authDomain: "fir-a2203.firebaseapp.com",
    projectId: "fir-a2203",
    storageBucket: "fir-a2203.appspot.com",
    messagingSenderId: "641977730019",
    appId: "1:641977730019:web:c7911a6bdbc145969316d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)