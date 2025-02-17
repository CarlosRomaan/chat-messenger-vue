import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH2XkjD5PP4ueGSWE8ogoJnrdVamRyArs",
  authDomain: "chat-messenger-28aaf.firebaseapp.com",
  projectId: "chat-messenger-28aaf",
  storageBucket: "chat-messenger-28aaf.firebasestorage.app",
  messagingSenderId: "206179851658",
  appId: "1:206179851658:web:3876adb5e036210539bc73"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db }