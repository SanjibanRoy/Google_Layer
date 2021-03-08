import React from 'react'
import L from 'leaflet';
const style = {

    width: '80%',
    bottom: '0px',
    top: '0px',
    left: '20%',
    position: 'absolute',
    margin: 0
}

const osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
});
const mapParams = {
    center: [25.95681, 91.7362],
    zoomControl: false,
    attributionControl: false,
    zoom: 8,
    layers: [osm]
}



class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLayers: [],
            mapId: 'mainMap'
        };
        this.layer = null;
        this.mainMap = null;
        this.mapControls = null;
        this.progress = null;

    }

    componentDidMount() {
        this.mainMap = L.map('map', mapParams)
        this.mainMap.on('click', (e) => {
            console.log("Test")
        });

    }
    componentDidUpdate(prevProps) {
        for (var i = 0; i < this.props.tasks.length; i++) {
            if (prevProps.tasks.length !== 0) {
                if (prevProps.tasks[i].show !== this.props.tasks[i].show) {
                    this.showActiveLayer(i)
                }
            }
        }


    }
    showActiveLayer(e) {
        if (this.props.tasks[e].show) {
            this.layer = L.tileLayer.wms("https://apps.nesdr.gov.in:442/geoserver/wms", {
                layers: this.props.tasks[e].layer,
                format: "image/png",
                transparent: true,
            })
            this.mainMap.addLayer(this.layer)
        }
        else {
            var keys_array = Object.keys(this.mainMap._layers).map(key=>parseInt(key))
            keys_array.map(d=>{
                if(this.props.tasks[e].layer===this.mainMap._layers[d].options.layers){
                    this.mainMap.removeLayer(this.mainMap._layers[d])
                }
            })
        }
    }
    render() {
        return <div id="map" className="mapStyle" style={style}></div>;
    }
}
export default Map
