// Konfigurasi Firebase (ganti dengan milik Anda sendiri)
const firebaseConfig = {
  apiKey: "AIzaSyALG4AyNHx24-H_m55QCvFYdm20mbt8vc4",
  authDomain: "clickcounter-2e61d.firebaseapp.com",
  databaseURL: "https://clickcounter-2e61d-default-rtdb.firebaseio.com",
  projectId: "clickcounter-2e61d",
  storageBucket: "clickcounter-2e61d.firebasestorage.app",
  messagingSenderId: "115127954384",
  appId: "1:115127954384:web:9c12fd16017b551f4fa7d5",
  measurementId: "G-WD11S287JV"
};

// Inisialisasi Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const clickCounterRef = database.ref('clickCounter/totalClicks');

// Fungsi untuk memperbarui tampilan saat data berubah (Real-Time Listener)
clickCounterRef.on('value', (snapshot) => {
    const data = snapshot.val();
    document.getElementById('clickCount').innerText = data;
});

// Fungsi untuk menambahkan klik
function incrementClick() {
    clickCounterRef.transaction((currentClicks) => {
        return (currentClicks || 0) + 1;
    });
}
