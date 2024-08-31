function initMap() {
    const map = new google.maps.Map(document.getElementById('map-container'), {
        center: { lat: -1.286389, lng: 36.817223 },
        zoom: 12,
    });

    const inputStart = document.getElementById('from-location');
    const inputEnd = document.getElementById('to-location');
    const autocompleteStart = new google.maps.places.Autocomplete(inputStart);
    const autocompleteEnd = new google.maps.places.Autocomplete(inputEnd);

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    document.getElementById('search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
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
    const saccoFares = [
        { name: 'SACCO 1', fare: fareEstimate * 1.1 },
        { name: 'SACCO 2', fare: fareEstimate * 1.2 },
        { name: 'SACCO 3', fare: fareEstimate * 1.3 },
    ];

    const fareContainer = document.getElementById('sacco-fares');
    fareContainer.innerHTML = '';
    saccoFares.forEach(sacco => {
        const fareDiv = document.createElement('div');
        fareDiv.textContent = `${sacco.name}: ${sacco.fare.toFixed(2)} KES`;
        fareContainer.appendChild(fareDiv);
    });
}

function calculateFare(route) {
    const distance = route.legs[0].distance.value / 1000; // in kilometers
    const peakHours = document.getElementById('peak-hours').value === 'peak';
    const farePerKm = peakHours ? 15 : 10; // Example fare rates
    return distance * farePerKm;
}

window.onload = initMap;
