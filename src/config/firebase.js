import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9ut6YZOAi2fnkCQhwGYkpIYn2jlaZEV8",
  authDomain: "facebook-clone-7af8d.firebaseapp.com",
  projectId: "facebook-clone-7af8d",
  storageBucket: "facebook-clone-7af8d.firebasestorage.app",
  messagingSenderId: "171157692896",
  appId: "1:171157692896:web:6cca41ef0e448fd4290b85",
};

// front end per env variables secure ho hi nhi sagty

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// export const db = getFirestore(app);
