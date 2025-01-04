// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const counterRef = ref(db, "counter");

// Update counter in real time
const counterElement = document.getElementById("counter");
onValue(counterRef, (snapshot) => {
  const value = snapshot.val();
  counterElement.textContent = value || 0;
});

// Increment counter on button click
document.getElementById("incrementButton").addEventListener("click", () => {
  const currentValue = parseInt(counterElement.textContent, 10);
  set(counterRef, currentValue + 1);
});
