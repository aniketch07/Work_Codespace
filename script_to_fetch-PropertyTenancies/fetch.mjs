const apiUrl = 'https://sandbox.billingbetter.co.uk/api/partner/packages?is_student=true&postcode=SW155PU';

// API key for authentication
const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NhbmRib3guYmlsbGluZ2JldHRlci5jby51ayIsImlhdCI6MTY0NzYyNTk3NiwibmJmIjoxNjQ3NjI1OTc2LCJqdGkiOiJsbzBvRk5qRUVscDhRWldPIiwic3ViIjo3NzEsInBydiI6IjRmOWU1MDM0NDM3MjA3NWQ5ZGJhNzUwMDFmYmFlYzAyNmFhNmExNzgiLCJyZWZlcmVuY2UiOm51bGwsIm5hbWUiOiJQYXJ0bmVyIFRva2VuIn0.9HO2p68wO0tTIqzBAxZoeodXfNfz1AnRsjHOktP7QQM';

// Make a GET request with authentication using the Fetch API
fetch(apiUrl, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log('Provider Names:');
    data.data.packages.forEach(pkg => {
        console.log(pkg.provider); // Log each provider name
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});