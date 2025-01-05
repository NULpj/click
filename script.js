const url = 'https://script.google.com/macros/s/AKfycbwh2bR-5xHgy-KrkY9V2PbpgL6BHNPohAIF2h-Gxsbarggyir5ofQD4oL8b7IvEMiy6oA/exec';

// Fungsi untuk mengambil data klik tanpa menambahnya
async function fetchClickCount() {
    const response = await fetch(`${url}?action=get`);
    const data = await response.json();
    document.getElementById('clickCount').innerText = data.clicks;
}

// Fungsi menambah klik hanya ketika tombol ditekan
async function incrementClick() {
    const response = await fetch(`${url}?action=increment`);
    const data = await response.json();
    document.getElementById('clickCount').innerText = data.clicks;
}

// Polling untuk update real-time setiap 3 detik
setInterval(fetchClickCount, 3000);

// Ambil data awal saat halaman dimuat
fetchClickCount();
