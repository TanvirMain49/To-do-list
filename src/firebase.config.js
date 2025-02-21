// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmXJCWIrnpyQA9mENj_jiJwqq8bzSDgHw",
  authDomain: "dragon-news-b0fcf.firebaseapp.com",
  projectId: "dragon-news-b0fcf",
  storageBucket: "dragon-news-b0fcf.firebasestorage.app",
  messagingSenderId: "910005309275",
  appId: "1:910005309275:web:8c56a532d923fe7286547e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;