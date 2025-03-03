(function() {
    // Get the query string from the URL
    const queryString = window.location.search;

    // Check if query parameters exist
    if (!queryString) return;

    // Parse the query string
    const urlParams = new URLSearchParams(queryString);

    // Object to store key-value pairs
    let queryData = {};

    // Loop through each query parameter and store in the object
    urlParams.forEach((value, key) => {
        queryData[key] = value;
    });

    // Push the extracted data to the GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'queryParamsExtracted',
        'queryParams': queryData
    });

    console.log('Query parameters pushed to dataLayer:', queryData);

    // Function to send a GET request with query parameters
    window.sendQueryData = function() {
        if (Object.keys(queryData).length === 0) {
            alert("No query parameters found!");
            return;
        }

        // Construct the request URL
        const baseUrl = "https://your-api-endpoint.com/data"; // Replace with your actual API endpoint
        const queryString = new URLSearchParams(queryData).toString();
        const requestUrl = `${baseUrl}?${queryString}`;

        // Send the GET request
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
    };
})();
