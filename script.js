// Initialize click count variable
let clickCount = 0;

// Get elements
const clickButton = document.getElementById('click-btn');
const clickCountDisplay = document.getElementById('click-count');

// Add event listener to the button
clickButton.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = `Click count: ${clickCount}`;
});
