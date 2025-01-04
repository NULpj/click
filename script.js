const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const resetButton = document.getElementById("resetButton");

// Ambil nilai counter dari sessionStorage atau atur ke 0 jika belum ada
let counter = parseInt(localStorage.getItem("counter")) || 0;
counterElement.textContent = counter;

// Polling untuk mengambil nilai terbaru dari file JSON setiap 5 detik
setInterval(async () => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/NULpj/click/main/counter.json');
    const data = await response.json();
    if (data.counter !== counter) {
      counter = data.counter; // Update counter jika ada perubahan
      counterElement.textContent = counter;
    }
  } catch (error) {
    console.error('Error fetching counter data:', error);
  }
}, 5000);

// Update counter di file JSON saat tombol diklik
incrementButton.addEventListener("click", () => {
  counter++; // Tambah nilai counter
  counterElement.textContent = counter; // Perbarui tampilan
  localStorage.setItem("counter", counter); // Simpan ke localStorage

  // Update file JSON (dalam hal ini kamu perlu update file JSON di GitHub secara manual atau via API)
  fetch('https://raw.githubusercontent.com/NULpj/click/main/counter.json', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ counter }),
  });
});

// Tombol reset
resetButton.addEventListener("click", () => {
  counter = 0; // Reset counter
  counterElement.textContent = counter; // Perbarui tampilan
  localStorage.setItem("counter", counter); // Simpan ke localStorage
});
