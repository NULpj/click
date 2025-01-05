const url = 'https://script.google.com/macros/s/AKfycbwh2bR-5xHgy-KrkY9V2PbpgL6BHNPohAIF2h-Gxsbarggyir5ofQD4oL8b7IvEMiy6oA/exec';
let lastClickCount = null;
async function fetchClickCount() {
    try {
        const response = await fetch(`${url}?action=get`);
        const data = await response.json();
        if (data.clicks !== lastClickCount) {
            document.getElementById('clickCount').innerText = data.clicks;
            lastClickCount = data.clicks;
        }
    } catch (error) {
        console.error("Gagal mengambil data:", error);
    }
}
async function incrementClick() {
    try {
        const response = await fetch(`${url}?action=increment`);
        const data = await response.json();
        document.getElementById('clickCount').innerText = data.clicks;
        lastClickCount = data.clicks; // Update data terakhir
    } catch (error) {
        console.error("Gagal menambah klik:", error);
    }
}
setInterval(fetchClickCount, 1000);
fetchClickCount();
