const url = 'https://script.google.com/macros/s/AKfycbwh2bR-5xHgy-KrkY9V2PbpgL6BHNPohAIF2h-Gxsbarggyir5ofQD4oL8b7IvEMiy6oA/exec';

// Fungsi hanya mengambil data awal tanpa increment
async function fetchInitialClickCount() {
    const response = await fetch(`${url}?action=get`);
    const data = await response.json();
    document.getElementById('clickCount').innerText = data.clicks;
}

// Fungsi hanya menambah angka ketika tombol diklik
async function incrementClick() {
    const response = await fetch(`${url}?action=increment`);
    const data = await response.json();
    document.getElementById('clickCount').innerText = data.clicks;
}

// Ambil data saat halaman dimuat
fetchInitialClickCount();
