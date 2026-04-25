import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-hG6gnR1WzEVJEQkwquCRv6xSDTNKaqk",
  authDomain: "saikiacode.firebaseapp.com",
  projectId: "saikiacode",
  storageBucket: "saikiacode.firebasestorage.app",
  messagingSenderId: "812199410355",
  appId: "1:812199410355:web:0a936a179680d669a80ec6",
  measurementId: "G-72WXC29G0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export default app;
