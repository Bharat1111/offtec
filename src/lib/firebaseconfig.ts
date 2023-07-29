// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn6yZxUVPrK371R8MLPtZiEqVTw023hSc",
  authDomain: "offtech-dccfe.firebaseapp.com",
  projectId: "offtech-dccfe",
  storageBucket: "offtech-dccfe.appspot.com",
  messagingSenderId: "951499029071",
  appId: "1:951499029071:web:f643ef6c1715e87661483a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
