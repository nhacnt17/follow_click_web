import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCkZuuaO5xqex7n2ChqVPy17NtITtLaoI", 
  authDomain: "followclickweb.firebaseapp.com",
  projectId: "followclickweb",
  storageBucket: "followclickweb.firebasestorage.app",
  messagingSenderId: "516991906698",
  appId: "1:516991906698:web:f42ba036eba1cc5bd08e73",
  measurementId: "G-TJKJ6RPY5R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, setDoc, getDoc };