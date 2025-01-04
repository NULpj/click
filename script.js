const apiUrl = "https://script.google.com/macros/s/AKfycbx9NaD6b5bD8a5qLPwwGjUv2c-d1SNrz1qFCRmwIA-uKIfqZ7LuW7EI1oCAn7QYfOpw/exec"; // Ganti dengan URL dari Apps Script Anda

// Fungsi untuk mengambil nilai counter
async function fetchCounter() {
  try {
    const response = await fetch(`${apiUrl}?action=get`);
    const data = await response.json();
    document.getElementById("counter").textContent = data.count;
  } catch (error) {
    console.error("Error fetching counter:", error);
  }
}

// Fungsi untuk menambah nilai counter
async function incrementCounter() {
  try {
    const response = await fetch(`${apiUrl}?action=increment`);
    const data = await response.json();
    document.getElementById("counter").textContent = data.count;
  } catch (error) {
    console.error("Error incrementing counter:", error);
  }
}

// Event listener untuk tombol
document.getElementById("incrementButton").addEventListener("click", incrementCounter);

// Ambil nilai counter saat halaman dimuat
fetchCounter();
