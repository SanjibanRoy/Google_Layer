import React from 'react'
import L from 'leaflet';
const style = {
    width: '100%',
    height: '100vh'
  }
// const Map = ({tasks}) =>{
//     console.log({tasks})
    const osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	});
    const mapParams = {
        center: [25.95681, -35.729687],
        zoomControl: false,
        zoom: 2,
        layers: [osm]
      }
//       L.map('map', mapParams)
    
//     return (
//         <div id ='map'>
//         {
//             tasks.map((task)=>(
//                 <h3>{task.text}</h3>
//                 ))
//         }
//             I am here
//         </div>
//     )
// }

// export default Map


class Map extends React.Component {
    componentDidMount() {
        console.log(this.props.tasks)
        L.map('map', mapParams)
      }
  render() {
    return <div id="map" style={style}></div>;
  }
}
export default Map
