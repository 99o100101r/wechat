// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6-bHL_HXqDHG_fIAPfpEjwtyI150mcBs",
  authDomain: "wechat-50619.firebaseapp.com",
  projectId: "wechat-50619",
  storageBucket: "wechat-50619.appspot.com",
  messagingSenderId: "258476495859",
  appId: "1:258476495859:web:bf7545ffb88c399f85b886",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
