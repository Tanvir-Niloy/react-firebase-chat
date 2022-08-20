// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVx0ZDOjOQ7DBihCyQ-Me88_Jb-ZYl8uQ",
  authDomain: "chat-app-yt-62d85.firebaseapp.com",
  projectId: "chat-app-yt-62d85",
  storageBucket: "chat-app-yt-62d85.appspot.com",
  messagingSenderId: "983411686083",
  appId: "1:983411686083:web:e8d5e8cca725cdc8b68076"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
