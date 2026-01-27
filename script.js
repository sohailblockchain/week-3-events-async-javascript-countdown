// ===============================
// Events & Async JavaScript
// Countdown Timer
// ===============================

// Get the Start button from HTML using its ID
const startBtn = document.getElementById("startBtn");

// Get the paragraph where countdown text will be shown
const display = document.getElementById("display");

// Get the input field where user enters seconds
const secondsInput = document.getElementById("secondsInput");

// Variable to store setInterval reference
// This helps us stop the timer later
let timer;

// ===============================
// Event Listener for Button Click
// ===============================

// This code runs ONLY when the user clicks the Start button
startBtn.addEventListener("click", function () {

    // Convert input value (string) into a number
    let seconds = Number(secondsInput.value);

    // Validation: check if input is valid
    if (seconds <= 0) {
        // Show error message if input is invalid
        display.textContent = "Please enter valid seconds";
        return; // Stop execution here
    }

    // Clear any previous running timer
    // This prevents multiple timers running at the same time
    clearInterval(timer);

    // Display initial countdown value
    display.textContent = `Time left: ${seconds} seconds`;

    // ===============================
    // setInterval (Async Function)
    // ===============================

    // setInterval runs this function every 1000ms (1 second)
    timer = setInterval(function () {

        // Decrease seconds by 1
        seconds--;

        // Update countdown text dynamically
        display.textContent = `Time left: ${seconds} seconds`;

        // Check if countdown has reached zero
        if (seconds === 0) {

            // Stop the timer
            clearInterval(timer);

            // Show final message
            display.textContent = "⏰ Time's up!";
        }

    }, 1000); // 1000 milliseconds = 1 second
});
