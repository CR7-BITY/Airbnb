import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDjPhLDrK-2bRF1y1oQEV-HQ6lrmpFidp8",
  authDomain: "airbnb-clone-bab20.firebaseapp.com",
  projectId: "airbnb-clone-bab20",
  storageBucket: "airbnb-clone-bab20.appspot.com",
  messagingSenderId: "471582168250",
  appId: "1:471582168250:web:aa206f1dc2faeee76b1e83"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()