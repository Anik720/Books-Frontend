import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWyNc5fCSklhcZMV3pdFIkRjhwXQZaTxo",
  authDomain: "books-d024c.firebaseapp.com",
  projectId: "books-d024c",
  storageBucket: "books-d024c.appspot.com",
  messagingSenderId: "420099899193",
  appId: "1:420099899193:web:f2dd7db796c945a2ceb2e8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
