// Ganti dengan URL Web App Google Apps Script yang sudah kamu buat
const scriptUrl = 'https://script.google.com/macros/s/AKfycbz4uFfBaEpxvJep93Xkv1N37geuwyZxqNFktuY5sakp6_pGIyBLAxIWkcXzfgSMSFUU/exec';

// Fungsi untuk mendapatkan jumlah klik dari Google Sheets
function getClickCount() {
    fetch(scriptUrl + '?action=get')
        .then(response => response.json())
        .then(data => {
            document.getElementById('clickCount').innerText = data.clickCount;
        })
        .catch(error => console.error('Error getting click count:', error));
}

// Fungsi untuk mengupdate jumlah klik di Google Sheets
function updateClickCount() {
    fetch(scriptUrl + '?action=increment', {
        method: 'POST'
    })
        .then(response => response.json())
        .then(() => getClickCount()) // Update jumlah klik setelah diubah
        .catch(error => console.error('Error updating click count:', error));
}

// Event listener untuk tombol
document.getElementById('clickButton').addEventListener('click', updateClickCount);

// Ambil jumlah klik pertama kali saat halaman dimuat
window.onload = getClickCount;
