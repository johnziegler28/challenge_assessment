// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its ID
    const button = document.getElementById("myButton");

    // Add a click event listener
    button.addEventListener("click", function() {
        alert("✅ Button Clicked! You can customize this action.");
    });
});
