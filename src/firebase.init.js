// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMi8j4FLZ4aorSoDl3StvDcLclJICsSw0",
  authDomain: "moha-milon-34557.firebaseapp.com",
  projectId: "moha-milon-34557",
  storageBucket: "moha-milon-34557.firebasestorage.app",
  messagingSenderId: "689034253295",
  appId: "1:689034253295:web:e72fb716ca7908561d1c1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);