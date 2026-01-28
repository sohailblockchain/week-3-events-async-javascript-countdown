// ===============================
// Events & Async JavaScript Demo
// Countdown Timer + Image Slider
// ===============================

// -------------------------------
// Countdown Timer
// -------------------------------

// Get the Start button from HTML using its ID
const startBtn = document.getElementById("startBtn");

// Get the paragraph where countdown text will be shown
const display = document.getElementById("display");

// Get the input field where user enters seconds
const secondsInput = document.getElementById("secondsInput");

// Variable to store setInterval reference
// This helps us stop the timer later
let timer;

// Event Listener for Button Click
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
            display.textContent = "Time's up!";
        }

    }, 1000); // 1000 milliseconds = 1 second
});

// -------------------------------
// Image Slider
// -------------------------------

// Grab slider elements from the DOM
const slides = Array.from(document.querySelectorAll(".slide"));
const dotsContainer = document.getElementById("dots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slider = document.querySelector(".slider");

// Keep track of the currently visible slide
let currentIndex = 0;

// Build dot indicators dynamically based on slide count
slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");

    // When a dot is clicked, jump to that slide
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = Array.from(document.querySelectorAll(".dot"));

// Show the slide at a given index and update UI helpers
function goToSlide(index) {
    // Wrap around when reaching either end
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    // Hide all slides and deactivate dots
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Activate the requested slide and dot
    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
}

// Convenience helpers for navigation buttons
function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

// Attach click handlers to buttons
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto-play the slider every 5 seconds
let sliderTimer = setInterval(nextSlide, 5000);

// Pause auto-play while user hovers (desktop only)
slider.addEventListener("mouseenter", () => {
    clearInterval(sliderTimer);
});

// Resume auto-play when hover ends
slider.addEventListener("mouseleave", () => {
    sliderTimer = setInterval(nextSlide, 5000);
});
