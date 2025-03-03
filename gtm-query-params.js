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

    // Log the data for debugging (optional)
    console.log('Query parameters pushed to dataLayer:', queryData);
})();
