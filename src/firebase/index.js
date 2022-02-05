
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPhoneNumber,connectAuthEmulator } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCLKvjC53cVG3HsgLGcdMHet-In4sPmxm4",
  authDomain: "eindiaconnect-44c08.firebaseapp.com",
  projectId: "eindiaconnect-44c08",
  storageBucket: "eindiaconnect-44c08.appspot.com",
  messagingSenderId: "570266762301",
  appId: "1:570266762301:web:de0f5f005ef19132257e54",
  measurementId: "G-BWKEXJZE5M"
};


const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export default firebase