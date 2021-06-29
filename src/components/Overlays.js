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

const Overlays = ({ overlayer }, { index }) => {
  let layers;
  console.log(overlayer.options);
  if ((overlayer.options === undefined) & (overlayer.subclass === undefined)) {
    layers = (
      <WMSTileLayer
        key={index}
        format="image/png"
        layers={overlayer.layer}
        url={overlayer.link}
        transparent="true"
        minZoom={overlayer.minZoom !== undefined ? overlayer.minZoom : ""}
        zIndex={overlayer.class === "Administrative" ? "15" : "10"}
      />
    );
  } else if (overlayer.subclass === "Lightning") {
    console.log("Inside Lightining");
    layers = (
      <TileLayer
        key={index}
        url={overlayer.link + "&t=" + Math.floor(+new Date() / 1000)}
        zIndex="10"
      />
    );
  } else if (overlayer.subclass === "WRF") {
    console.log("Inside WRF");
    layers = (
      <WMSTileLayer
        key={index}
        url={overlayer.link  + "rh?slide=4"}
        zIndex="10"
      />
    );
  } else if (overlayer.options !== "undefined") {
    layers = (
      <AddTimeseries
        key={index}
        test={[overlayer.layer, overlayer.link]}
        showAnalytics={overlayer.show}
      />
    );
  }

  return <div>{layers}</div>;
};

export default Overlays;
