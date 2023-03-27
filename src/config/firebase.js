// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, setDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-rZ2oV65FrUy0upZIDhdhA_7emw3VaQQ",
  authDomain: "my-forum-4fc2e.firebaseapp.com",
  projectId: "my-forum-4fc2e",
  storageBucket: "my-forum-4fc2e.appspot.com",
  messagingSenderId: "222275646047",
  appId: "1:222275646047:web:bbd01807c3268088fba1ea"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


export const db = getFirestore(app)



  // email: 'kenaa@example.com',
  // password: '123456789',

