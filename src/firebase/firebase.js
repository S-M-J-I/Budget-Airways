// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
import firebaseConfigs from "../../configs/firebase.configs";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebaseConfigs

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
const auth = getAuth(app)

export { auth }


// * FIX THE FIREBASE ERROR