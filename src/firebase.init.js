// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvzYWmZDfDdvpY37WOR3_3y1mDAsrY6w4",
  authDomain: "ema-john-simple-c618f.firebaseapp.com",
  projectId: "ema-john-simple-c618f",
  storageBucket: "ema-john-simple-c618f.appspot.com",
  messagingSenderId: "1076457125252",
  appId: "1:1076457125252:web:82a3c1d925f6ae944a19d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
