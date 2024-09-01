import folium

def create_map():
    #create a map on Kenya

    m= folium.Map(location=[0.0236, 37.9062], zoom_start=6)

    #Define the forests and their coordinates

    forests = [
        {"name": "Kakamega Forest", "location": [0.2827, 34.7519]},
        {"name": "Mau Forest", "location": [-0.5257, 35.6046]},
        {"name": "Aberdare Forest", "location": [-0.4167, 36.6833]},
        {"name": "Mt. Kenya Forest", "location": [0.1521, 37.3084]}
    ]

    #Add markers

    for forest in forests:

        folium.Marker(
            location=forest ["location"],
            popup=forest ["name"],
            icon=folium.Icon(icon="tree-conifer", prefix="glyphicon") 
        ).add_to(m)

    #Save the map as an HTML file

    m.save("kenya_forests_map.html")

#Generate the map
create_map()