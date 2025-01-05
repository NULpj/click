const url = 'https://script.google.com/macros/s/AKfycbwqnvqnYkBM6z5numP5p1NuDKvPbS6RXQC_ey7woCTHqBmKMlE1-JK-6qP55MldS4UXVw/exec';
async function incrementClick() {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('clickCount').innerText = data.clicks;
}
incrementClick();
