import folium

def create_map():
    m= folium.Map(location=[0.0236, 37.9062], zoom_start=6)

    #Define the stages and their coordinates

    stages = [
        {"name": "Archives stage", "location": [-1.2568308,36.7618115]},
        {"name": "kenkom stage", "location": [-1.2859048,36.822077]},
        {"name": "RNG", "location": [-1.285254,36.823852]},
        {"name": "Bus Station", "location": [-1.283353,36.8209625]}
    ]

    #Add markers

    for stage in stages:

        folium.Marker(
            location=stage ["location"],
            popup=stage ["name"],
            icon=folium.Icon(icon="tree-conifer", prefix="glyphicon") 
        ).add_to(m)

    #Save the map as an HTML file

    m.save("kenya_stages_map.html")

#Generate the map
create_map()