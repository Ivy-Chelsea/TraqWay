function initMap() {
    const map = new google.maps.Map(document.getElementById('map-container'), {
        center: { lat: -1.286389, lng: 36.817223 },
        zoom: 12,
    });

    const inputStart = document.getElementById('from-location');
    const inputDestination = document.getElementById('to-location');
    const autocompleteStart = new google.maps.places.Autocomplete(inputStart);
    const autocompleteDestination = new google.maps.places.Autocomplete(inputDestination);

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    document.getElementById('search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    });

    // Auto-detect current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            map.setCenter(pos);
            inputStart.value = `${pos.lat}, ${pos.lng}`;
        });
    }
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const start = document.getElementById('from-location').value;
    const end = document.getElementById('to-location').value;
    const travelMode = document.getElementById('travel-mode').value.toUpperCase();

    directionsService.route(
        {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode[travelMode],
        },
        (response, status) => {
            if (status === 'OK') {
                directionsRenderer.setDirections(response);
                displayFareEstimate(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        }
    );
}

function displayFareEstimate(response) {
    const route = response.routes[0];
    const fareEstimate = calculateFare(route);
    document.getElementById('fare').textContent = `Estimated Fare: ${fareEstimate} KES`;
}

function calculateFare(route) {
    // Simple fare calculation based on distance
    const distance = route.legs[0].distance.value / 1000; // in kilometers
    const farePerKm = 10; // Example fare rate per kilometer
    return distance * farePerKm;
}

function searchRoutes() {
    const fromLocation = document.getElementById('from-location').value;
    const toLocation = document.getElementById('to-location').value;
    const travelDate = document.getElementById('travel-date').value;

    if (fromLocation && toLocation && travelDate) {
        alert(`Searching routes from ${fromLocation} to ${toLocation} on ${travelDate}`);
        // Implement the search functionality here
    } else {
        alert('Please fill in all fields.');
    }
}

window.onload = initMap;
