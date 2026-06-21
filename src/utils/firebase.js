// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz2qBBXV21UoBn1qVe5EYOWsK5Pac9kVM",
  authDomain: "streamai-f2035.firebaseapp.com",
  projectId: "streamai-f2035",
  storageBucket: "streamai-f2035.firebasestorage.app",
  messagingSenderId: "911612657573",
  appId: "1:911612657573:web:5b8d60c7cf766506ddb24c",
  measurementId: "G-H5P1R7QKSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);