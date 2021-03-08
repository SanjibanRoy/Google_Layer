import React from 'react'
import L from 'leaflet';
const style = {

  width: '80%',
  bottom: '0px',
  top: '0px',
  left:'20%',
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
    center: [25.95681, -35.729687],
    zoomControl: false,
    attributionControl:false,
    zoom: 2,
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
        console.log(this.props.tasks)
        this.mainMap = L.map('map', mapParams)
        this.mainMap.on('click', (e) => {
          console.log("Test")
        //this.props.onDelete(1)
          // Store.setMapBounds(this.mainMap.getBounds());
          // Store.setLat(this.mainMap.getCenter().lat);
          // Store.setLng(this.mainMap.getCenter().wrap().lng);
          // Store.setZoom(this.mainMap.getZoom());
        });
        
    }
    componentDidUpdate(prevProps) {
        console.log(["prop Updated:","Next Prop",this.props.tasks[0].show.toString()])
        for(var i=0;i<this.props.tasks.length;i++)
        {
          console.log(prevProps)
          if(prevProps.tasks.length !== 0 ){
          if(  prevProps.tasks[i].show !== this.props.tasks[i].show){
            console.log("Great Success", prevProps.tasks[i].id)
          }
        }
        }
        this.showActiveLayer()

      }
    showActiveLayer(){

        
        if(this.props.tasks[0].show){
        this.layer = L.tileLayer.wms( "https://apps.nesdr.gov.in:442/geoserver/wms", {
            layers: "analytic:ner_boundary",
            format: "image/png",
            transparent: true, 
          })
        this.mainMap.addLayer(this.layer)
        }
        else 
        {
          console.log(this.mainMap)

          console.log(this.mainMap._layers[parseInt(Object.keys(this.mainMap._layers)[1])])
          if(this.layer!=null){
            this.mainMap.removeLayer(this.layer);
          }
        }
    }
    render() {
        return <div id="map" className="mapStyle" style={style}></div>;
    }
}
export default Map
