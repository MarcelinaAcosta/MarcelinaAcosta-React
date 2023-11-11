// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzetEWQ5m9-Et3lchMO2U1GBp_ZwDPVFA",
  authDomain: "react-venus-de-milo.firebaseapp.com",
  projectId: "react-venus-de-milo",
  storageBucket: "react-venus-de-milo.appspot.com",
  messagingSenderId: "475765066283",
  appId: "1:475765066283:web:8d9865d66e4a604848b86e",
  measurementId: "G-58NYZPXJZF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
