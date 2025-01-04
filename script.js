// Get the stored click count from localStorage, default to 0 if not found
let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;

// Get the elements for displaying the click count and button
const clickCountElement = document.getElementById('clickCount');
const clickButton = document.getElementById('clickButton');

// Function to update the click count and store it in localStorage
function updateClickCount() {
    clickCount++; // Increment the click count
    clickCountElement.innerText = clickCount; // Update the displayed click count
    localStorage.setItem('clickCount', clickCount); // Store the updated count in localStorage
}

// Initialize the click count display
clickCountElement.innerText = clickCount;

// Add event listener to the button to track clicks
clickButton.addEventListener('click', updateClickCount);
