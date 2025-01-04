// Mendapatkan elemen dari DOM
const globalClickCountDisplay = document.getElementById('globalClickCount');
const clickButton = document.getElementById('clickButton');

// Mengambil jumlah klik dari localStorage atau menginisialisasi dengan 0
let globalClickCount = localStorage.getItem('globalClickCount') ? parseInt(localStorage.getItem('globalClickCount')) : 0;

// Menampilkan jumlah klik di halaman
globalClickCountDisplay.textContent = globalClickCount;

// Menambahkan event listener untuk tombol
clickButton.addEventListener('click', () => {
    globalClickCount++;
    globalClickCountDisplay.textContent = globalClickCount;
    localStorage.setItem('globalClickCount', globalClickCount);
});
