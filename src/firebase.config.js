// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5_SwkiizoyGDFbPRF1RX8ResJfsggX-8",
  authDomain: "to-do-list-220c9.firebaseapp.com",
  projectId: "to-do-list-220c9",
  storageBucket: "to-do-list-220c9.firebasestorage.app",
  messagingSenderId: "403235379698",
  appId: "1:403235379698:web:113eb6f9f56c59f579736b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;