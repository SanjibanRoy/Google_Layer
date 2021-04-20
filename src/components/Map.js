import React from 'react'
import L from 'leaflet';
const style = {

    width: '100%',
    bottom: '0px',
    top: '0px',
    left: '0px',
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
        this.analyticsLayer = null


    }

    componentDidMount() {
        this.mainMap = L.map('map', mapParams)
        this.mainMap.on('click', (e) => {
            this.props.updateBox(e)
            console.log("Test")
        });

    }
    componentDidUpdate(prevProps, nextprops) {
        for (var i = 0; i < this.props.tasks.length; i++) {
            if (prevProps.tasks.length !== 0) {
                if (prevProps.tasks[i].show !== this.props.tasks[i].show) {
                    this.showActiveLayer(i)
                }
            }
        }
        
        for (var i = 0; i < this.props.analyticsLayers.length; i++) {
         
                if (prevProps.analyticsLayers !== this.props.analyticsLayers && this.props.analyticsLayers[i].show===true) {
                    this.showAnalyticsLayer(this.props.analyticsLayers[i])
                   // console.log(this.props.analyticsLayers[i])
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
            var keys_array = Object.keys(this.mainMap._layers).map(key => parseInt(key))
            keys_array.map(d => {
                if (this.props.tasks[e].layer === this.mainMap._layers[d].options.layers) {
                    this.mainMap.removeLayer(this.mainMap._layers[d])
                }
            })
        }
    }

    showAnalyticsLayer(e) {
        console.log(e)
        // if (this.props.tasks[e].show) {
            if( this.analyticsLayer!=null)
            {
                this.mainMap.removeLayer( this.analyticsLayer)
            }
            this.analyticsLayer = L.tileLayer("https://vedas.sac.gov.in/InteractiveGeoService/tms_comp_diff/NDVI_MODIS/{z}/{x}/{-y}?tm_arr1=1616976000&tm_arr2=1585440000&opr=max&min_val=0&max_val=250&color_map_name=NDVI_DIFF")

            this.mainMap.addLayer( this.analyticsLayer)
        // }
        // else {
        //     var keys_array = Object.keys(this.mainMap._layers).map(key => parseInt(key))
        //     keys_array.map(d => {
        //         if (this.props.tasks[e].layer === this.mainMap._layers[d].options.layers) {
        //             this.mainMap.removeLayer(this.mainMap._layers[d])
        //         }
        //     })
        // }
    }
    render() {
        return <div id="map" className="mapStyle" style={style}></div>;
    }
}
export default Map
