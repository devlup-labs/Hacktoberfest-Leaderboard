// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBIdBz5aI14mALjLDF3z_1VczgKQLVokY",
    authDomain: "fir-a2203.firebaseapp.com",
    projectId: "fir-a2203",
    databaseURL: "https://fir-a2203-default-rtdb.firebaseio.com",
    storageBucket: "fir-a2203.appspot.com",
    messagingSenderId: "641977730019",
    appId: "1:641977730019:web:c7911a6bdbc145969316d6",
}

// const firebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_APIKEY,
//     authDomain: process.env.REACT_APP_AUTHDOMAIN,
//     projectId: process.env.REACT_APP_PROJECTID,
//     databaseURL: process.env.REACT_APP_DATABASEURL,
//     storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//     appId: process.env.REACT_APP_APPID,
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)