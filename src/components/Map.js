
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const Map = ({places}) => {
  const style = {
    width: "100%",
    bottom: "0px",
    top: "0px",
    left: "0px",
    position: "absolute",
    margin: 0,
  };
  
  const showPreview = (place) => {
    // show place's description
  }

  return (
    <div className="map__container" style={style}>
      <MapContainer
        center={[51.505, -0.09]} 
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map