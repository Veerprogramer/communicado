import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgK6lP6sU9NaOvr-K1V_jigO4j9cOiRns",
  authDomain: "communicado-9042c.firebaseapp.com",
  projectId: "communicado-9042c",
  storageBucket: "communicado-9042c.appspot.com",
  messagingSenderId: "463649495282",
  appId: "1:463649495282:web:f1eaccee5e1514c48b186b",
  measurementId: "G-RJZHQ02P56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
