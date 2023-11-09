import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNmYC8je2J2cqK2qne3Fu59jpPe9fK6gQ",
  authDomain: "devlinks-ac6f5.firebaseapp.com",
  projectId: "devlinks-ac6f5",
  storageBucket: "devlinks-ac6f5.appspot.com",
  messagingSenderId: "801318442548",
  appId: "1:801318442548:web:d5d6180fafc14b74f09c61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
