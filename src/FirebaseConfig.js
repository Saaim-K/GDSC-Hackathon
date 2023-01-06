// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZVUcc0HyWA7P8MUkPKM5cnC3p3v6h4VQ",
  authDomain: "code-jam-52df8.firebaseapp.com",
  projectId: "code-jam-52df8",
  storageBucket: "code-jam-52df8.appspot.com",
  messagingSenderId: "780018412896",
  appId: "1:780018412896:web:c155213df624cef9708205"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

