// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "mern-orbital.firebaseapp.com",
	projectId: "mern-orbital",
	storageBucket: "mern-orbital.appspot.com",
	messagingSenderId: "286999383952",
	appId: "1:286999383952:web:ec0bb3dd14963eb8f0ed15",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
