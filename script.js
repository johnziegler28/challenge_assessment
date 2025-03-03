document.getElementById("myButton").addEventListener("click", function() {
    // Get current URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const queryString = urlParams.toString();
    
    if (!queryString) {
        alert("No query parameters found!");
        return;
    }

    // API Endpoint (Replace with your actual endpoint)
    const requestUrl = `https://johnziegler28.github.io/challenge_assessment/?${key=key&value=value}`;

    // Send GET request
    fetch(requestUrl, { method: "GET" })
        .then(response => response.json())
        .then(data => {
            console.log("Response received:", data);
            alert("Request sent! Check the console for response.");
        })
        .catch(error => {
            console.error("Error sending request:", error);
            alert("Failed to send request. Check console for errors.");
        });
});
