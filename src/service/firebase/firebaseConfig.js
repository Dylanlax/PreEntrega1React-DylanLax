// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlRA908ICgFoDyPbj3egTbhohpdXrkPzc",
  authDomain: "proyecto-final-react-e6643.firebaseapp.com",
  projectId: "proyecto-final-react-e6643",
  storageBucket: "proyecto-final-react-e6643.appspot.com",
  messagingSenderId: "664369741597",
  appId: "1:664369741597:web:b9287c2b1a7bd03b566bf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)