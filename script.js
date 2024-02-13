mapboxgl.accessToken = 'pk.eyJ1IjoibmRtYXBib3giLCJhIjoiY2xyaDR1dmdxMG05eTJscGhuajdwZW5zaCJ9.jowmRaqUFXHe6G3K7tt2bw';

const map = new mapboxgl.Map({
    container: "my-map",
    style: 'mapbox://styles/mapbox/standard',
    center: [-60, -30],
    zoom: 20,
});


map.on('load', () => {
    //Add a data source containing GeoJSON data
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                     "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                        -79.39865237301687,
                        43662343395037766
                    ],
                     "type": "Point"
                    }
                }
            ]    
        }
        
    });

    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }
    });
});