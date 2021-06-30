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
  } else if (overlayer.subclass === "GeoJSON") {
    layers = <MarkersAdd url={overlayer.link} />;
  } else if (overlayer.subclass === "WRF") {
    layers = (
      <AddTimeseries
        key={index}
        test={[overlayer.layer, overlayer.link]}
        showAnalytics={overlayer.show}
        subclass="WRF"
        slide={5}
      />
    );
  } else if (overlayer.options !== "undefined") {
    layers = overlayer.show&&overlayer.options.map(
      (e) =>
        e.value === overlayer.layer && (
          <AddTimeseries
            key={index}
            test={[overlayer.layer, overlayer.link]}
            showAnalytics={overlayer.show}
            subclass={overlayer.subclass}
            options={e.value}
          />
        )
    );
  }

  return <div>{layers}</div>;
};

export default Overlays;
