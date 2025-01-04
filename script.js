// Ambil elemen dari DOM
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const resetButton = document.getElementById("resetButton");

// Ambil nilai counter dari localStorage atau atur ke 0 jika belum ada
let counter = parseInt(localStorage.getItem("counter")) || 0;
counterElement.textContent = counter;

// Tambahkan event listener untuk tombol increment
incrementButton.addEventListener("click", () => {
  counter++; // Tambah nilai counter
  counterElement.textContent = counter; // Perbarui tampilan
  localStorage.setItem("counter", counter); // Simpan ke localStorage
});

// Tambahkan event listener untuk tombol reset
resetButton.addEventListener("click", () => {
  counter = 0; // Atur nilai counter ke 0
  counterElement.textContent = counter; // Perbarui tampilan
  localStorage.setItem("counter", counter); // Simpan ke localStorage
});
