import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBf6BBrxQP6Bq8tTvy2dPmhTKpl6pcN534",
  authDomain: "nft-marketplace-e07e4.firebaseapp.com",
  projectId: "nft-marketplace-e07e4",
  storageBucket: "nft-marketplace-e07e4.firebasestorage.app",
  messagingSenderId: "823402520171",
  appId: "1:823402520171:web:c3cedc14a2d2a2edc81b2e",
  measurementId: "G-53KV9FJZJX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
