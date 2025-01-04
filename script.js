// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyALG4AyNHx24-H_m55QCvFYdm20mbt8vc4",
    authDomain: "clickcounter-2e61d.firebaseapp.com",
    projectId: "clickcounter-2e61d",
    storageBucket: "clickcounter-2e61d.firebasestorage.app",
    messagingSenderId: "115127954384",
    appId: "1:115127954384:web:9c12fd16017b551f4fa7d5",
    measurementId: "G-WD11S287JV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Reference to click count in Firebase Database
const clickCountRef = database.ref('clickCount');

// Update total clicks from Firebase (real-time updates)
clickCountRef.on('value', (snapshot) => {
    const clickCount = snapshot.val() || 0;
    document.getElementById('clickCount').innerText = clickCount;
});

// Function to update click count in Firebase
function updateClickCount() {
    clickCountRef.transaction((currentValue) => {
        // Increase click count by 1
        return (currentValue || 0) + 1;
    }).then((result) => {
        if (result.committed) {
            console.log('Klik berhasil diperbarui');
        } else {
            console.log('Klik tidak berhasil diperbarui');
        }
    }).catch((error) => {
        console.error('Terjadi kesalahan saat memperbarui klik:', error);
    });
}

// Event listener for the click button
document.getElementById('clickButton').addEventListener('click', updateClickCount);
