import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyCLVNR4Mff974Xxjg3Xtzbf6_FmoZ0JLTU",
  authDomain: "reduxstart-4d639.firebaseapp.com",
  projectId: "reduxstart-4d639",
  storageBucket: "reduxstart-4d639.firebasestorage.app",
  messagingSenderId: "1093847645501",
  appId: "1:1093847645501:web:8525077a1cec1c7f115954",
  measurementId: "G-WRM63PJ92N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
