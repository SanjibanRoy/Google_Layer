import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  useMapEvents,
} from "react-leaflet";
// import { LatLngExpression } from "leaflet";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";
import { selectLayerDataSet } from "../features/layers/layervisualiseslice";
import React from "react";
function HandleClick() {
  const map = useMapEvents({
    click: (e) => {
      console.log(e);
    },
  });
  return null;
}
function HandleHover() {
  const map = useMapEvents({
    mousemove: (e) => {
      //  console.log(e)
    },
  });
  return null;
}

const Map = () => {
  // const mounted = useRef();

  const state = useSelector(selectDataSet);
  const layerState = useSelector(selectLayerDataSet);
  console.log(layerState);
  console.log(state);
  // console.log(layerState);
  // // const [mainMap, setmainMap] = useState(0);
  // // const [analyticsLayer, setanalyticsLayer] = useState(null);
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log("Test use effect");
  // });
  return (
    <MapContainer center={[26.2006, 92.9376]} zoom={6} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
          <WMSTileLayer
            format="image/png"
            layers="analytic:ner_landuse_landcover_50k_1st_cycle"
            url="https://apps.nesdr.gov.in:442/geoserver/wms"
            transparent="true"
          />
          <WMSTileLayer
            format="image/png"
            layers="analytic:ner_census"
            url="https://apps.nesdr.gov.in:442/geoserver/wms"
            transparent="true"
          />
       

      <HandleClick />
      <HandleHover />
    </MapContainer>
  );
};

export default Map;
