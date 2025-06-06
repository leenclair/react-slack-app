// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHNOgz8LmvXhGtU0ZoS-x3KWGhy3xSxbE",
  authDomain: "react-chat-app-c68f8.firebaseapp.com",
  projectId: "react-chat-app-c68f8",
  storageBucket: "react-chat-app-c68f8.firebasestorage.app",
  messagingSenderId: "600602286554",
  appId: "1:600602286554:web:835d6f3dbec55e285dc8e3",
  measurementId: "G-S81W9EZCLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;