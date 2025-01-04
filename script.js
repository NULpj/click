<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Firebase Click Counter</title>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"></script>
</head>
<body>
    <h1>Click Counter</h1>
    <button id="clickButton">Click Me!</button>
    <p>Total Clicks: <span id="clickCount">0</span></p>

    <script>
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

        const clickCountRef = database.ref('clickCount');

        // Update total clicks from Firebase
        clickCountRef.on('value', (snapshot) => {
            const clickCount = snapshot.val();
            document.getElementById('clickCount').innerText = clickCount;
        });

        // Function to update click count
        function updateClickCount() {
            clickCountRef.transaction((currentValue) => {
                return (currentValue || 0) + 1;
            });
        }

        // Event listener for click button
        document.getElementById('clickButton').addEventListener('click', updateClickCount);
    </script>
</body>
</html>
