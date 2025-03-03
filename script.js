(function() {
    // Get the query string from the URL
    const queryString = window.location.search;
    
    // Parse the query string
    const urlParams = new URLSearchParams(queryString);
    
    // Object to store key-value pairs
    let queryData = {};

    // Loop through the query parameters and add them to the object
    urlParams.forEach((value, key) => {
        queryData[key] = value;
    });

    // Push the data to GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'queryParamsExtracted',
        'queryParams': queryData
    });

    console.log('Query parameters pushed to dataLayer:', queryData);
})();
