// Initialize the click count variable
let clickCount = 0;

// Get the elements for displaying the click count and button
const clickCountElement = document.getElementById('clickCount');
const clickButton = document.getElementById('clickButton');

// Function to update the click count and display it
function updateClickCount() {
    clickCount++; // Increment the click count
    clickCountElement.innerText = clickCount; // Update the displayed click count
}

// Add event listener to the button to track clicks
clickButton.addEventListener('click', updateClickCount);
