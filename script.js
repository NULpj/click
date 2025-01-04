// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALG4AyNHx24-H_m55QCvFYdm20mbt8vc4",
  authDomain: "clickcounter-2e61d.firebaseapp.com",
  databaseURL: "https://clickcounter-2e61d-default-rtdb.firebaseio.com/",
  projectId: "clickcounter-2e61d",
  storageBucket: "clickcounter-2e61d.firebasestorage.app",
  messagingSenderId: "115127954384",
  appId: "1:115127954384:web:9c12fd16017b551f4fa7d5",
  measurementId: "G-WD11S287JV"
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
