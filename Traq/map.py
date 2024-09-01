import folium

def create_map():
    # Create a map centered on a location in Kenya
    m = folium.Map(location=[0.0236, 37.9062], zoom_start=6)

    # Define the start point, stages, and destination with their coordinates
    locations = [
        {"name": "Start Point", "location": [-1.2921, 36.8219]},  # Example: Nairobi
        {"name": "Archives stage", "location": [-1.2568308,36.7618115]},
        {"name": "Kenkom stage", "location": [-1.2859048,36.822077]},
        {"name": "RNG", "location": [-1.285254,36.823852]},
        {"name": "Bus Station", "location": [-1.283353,36.8209625]},
        {"name": "Destination", "location": [-1.2921, 36.8219]}  # Example: Nairobi
    ]

    # Add markers for each stage
    for location in locations:
        folium.Marker(
            location=location["location"],
            popup=location["name"],
            icon=folium.Icon(icon="map-marker", prefix="fa")
        ).add_to(m)

    # Extract the list of coordinates to create a polyline
    coordinates = [location["location"] for location in locations]

    # Add a polyline to connect the stages
    folium.PolyLine(
        locations=coordinates,
        color="blue",
        weight=5,
        opacity=0.7
    ).add_to(m)

    # Save the map as an HTML file
    m.save("kenya_stages_map1.html")

# Generate the map
create_map()
