import React from "react";
import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
  useMapEvents,
  FeatureGroup,
  useMap,
  Marker,
} from "react-leaflet";
import AddTimeseries from "./AddTimeseries";
import MarkersAdd from "./MarkersAdd";
import VectorTile from "./VectorTile";
import LayerGroup from "./Markercluster";
import { CollectionsOutlined, ContactsOutlined } from "@material-ui/icons";
const Overlays = ({ overlayer }, { index }) => {
  let layers;
  if((overlayer.text=="State Boundary")){
    layers = (  overlayer.show&&<VectorTile show="State" />)

  }
  else if((overlayer.text=="District Boundary")){
    layers = (  overlayer.show&&<VectorTile show="District" />)

  }
  else if ((overlayer.options === undefined) & (overlayer.subclass === undefined)) {
    layers = (
      <WMSTileLayer
        key={index}
        format="image/png"
        layers={overlayer.layer}
        url={overlayer.link}
        transparent="true"
        minZoom={overlayer.minZoom !== undefined ? overlayer.minZoom : ""}
        zIndex={overlayer.class === "Mask Layer" ? "15" : "10"}
      />
    );
  } else if (overlayer.subclass === "Lightning") {
    layers = (
      <TileLayer
        key={index}
        url={overlayer.link + "&t=" + Math.floor(+new Date() / 1000)}
        zIndex="10"
      />
    );
  } else if (overlayer.subclass === "GeoJSON") {
    layers = <MarkersAdd url={overlayer.link} />;
  }else if (overlayer.subclass === "GeoJSONe") {
    layers = <LayerGroup url={overlayer.link} />;
  }else if (overlayer.subclass === "WRF") {
    layers =
      overlayer.show &&
      overlayer.options.map(
        (e) =>
          e.value === parseInt(overlayer.layer) && (
            console.log(overlayer.layer),
            <WMSTileLayer
              key={index}
              format="image/png"
              layers={overlayer.layer}
              url={overlayer.link}
              transparent="true"
              slide={overlayer.layer}

              // minZoom={overlayer.minZoom !== undefined ? overlayer.minZoom : ""}
              // zIndex={overlayer.class === "Administrative" ? "15" : "10"}
            />
          )
      );
  }else if(overlayer.subclass == "alertlightning"){
      layers =
      overlayer.show &&
      overlayer.options.map(
        (e) =>
        e.value === overlayer.layer && (
            <WMSTileLayer
              key={index}
              format="image/png"
              layers={overlayer.layer}
              url={overlayer.link}
              transparent="true"
              slide={overlayer.layer}
            />
          ),
      );  
  } 
  else if (overlayer.options !== "undefined") {
    layers =
      overlayer.show &&
      overlayer.options.map(
        (e) =>
          e.value === overlayer.layer && (
            <WMSTileLayer
              key={index}
              format="image/png"
              layers={overlayer.layer}
              url={overlayer.link}
              transparent="true"
              // minZoom={overlayer.minZoom !== undefined ? overlayer.minZoom : ""}
              // zIndex={overlayer.class === "Administrative" ? "15" : "10"}
            />

          )
      );
  }

  return <div>{layers}</div>;
};

export default Overlays;
