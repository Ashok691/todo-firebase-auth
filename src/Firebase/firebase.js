// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb8XOQQiKoLkj8JyYcuH-iKY6_dRlSnEE",
  authDomain: "todo-list-13007.firebaseapp.com",
  projectId: "todo-list-13007",
  storageBucket: "todo-list-13007.appspot.com",
  messagingSenderId: "60885528619",
  appId: "1:60885528619:web:d06dc9f7d91bff10e43a6e",
  measurementId: "G-QNXQ7SJ3RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)

export {auth, db};
