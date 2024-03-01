// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmUxBNDpTBLDOl0otpH_goOKk4VvzEC3c",
  authDomain: "offtec-b6328.firebaseapp.com",
  projectId: "offtec-b6328",
  storageBucket: "offtec-b6328.appspot.com",
  messagingSenderId: "65131480777",
  appId: "1:65131480777:web:c992d33cab639bf18baf18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
