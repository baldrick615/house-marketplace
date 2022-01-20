import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmhWgyk2yc2fsR8JB8gUPm2xmgd1YTljc",
  authDomain: "house-marketplace-app-3.firebaseapp.com",
  projectId: "house-marketplace-app-3",
  storageBucket: "house-marketplace-app-3.appspot.com",
  messagingSenderId: "254057133353",
  appId: "1:254057133353:web:329e11f6ec2ba82026b338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()