import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0k3wnrCSWchGLvVjMp9ofBZhsRskZpww",
  authDomain: "chatch-15d0f.firebaseapp.com",
  projectId: "chatch-15d0f",
  storageBucket: "chatch-15d0f.appspot.com",
  messagingSenderId: "448457690918",
  appId: "1:448457690918:web:8c6ceab362a5c0d4487be7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()