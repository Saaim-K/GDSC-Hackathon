import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDZVUcc0HyWA7P8MUkPKM5cnC3p3v6h4VQ",
  authDomain: "code-jam-52df8.firebaseapp.com",
  projectId: "code-jam-52df8",
  storageBucket: "code-jam-52df8.appspot.com",
  messagingSenderId: "780018412896",
  appId: "1:780018412896:web:c155213df624cef9708205"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

