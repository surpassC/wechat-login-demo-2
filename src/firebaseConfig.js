// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDaArS2u2EMYFxoM3fq80_7ceQX79ea66c',
  authDomain: 'test-d0da1.firebaseapp.com',
  projectId: 'test-d0da1',
  storageBucket: 'test-d0da1.appspot.com',
  messagingSenderId: '1032284786597',
  appId: '1:1032284786597:web:bce9999d5e9ba5b106e24c',
  measurementId: 'G-FBFY4634XF'
}

// Initialize Firebase
const fireBase = initializeApp(firebaseConfig)
const db = getFirestore(fireBase)

export { fireBase, db }
