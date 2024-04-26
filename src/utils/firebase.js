// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOeBPpl0QczgdPZCixxS33LWimU87DT1c",
  authDomain: "cinemania-gpt.firebaseapp.com",
  projectId: "cinemania-gpt",
  storageBucket: "cinemania-gpt.appspot.com",
  messagingSenderId: "797757782393",
  appId: "1:797757782393:web:288b48a6569d135dfbd7a8",
  measurementId: "G-YKVGSPZQ4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);