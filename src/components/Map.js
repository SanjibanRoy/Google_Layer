import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  useMapEvents,
} from "react-leaflet";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { selectBaseDataSet } from "../features/layers/baselayerslice";
import { selectLayerData } from "../features/layers/layervisualiseslice";
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
  const [AnalyticsLayer,SetAnalytics]=useState({
    show:false
  })   
  const state = useSelector(selectDataSet);
  const base = useSelector(selectBaseDataSet);
  console.log(state);
  const analyticsvisualise = useSelector(selectLayerData);
  console.log(analyticsvisualise);
  const layerState = useSelector(selectLayerDataSet);




  

  return (
    <MapContainer center={[26.2006, 92.9376]} zoom={6} zoomControl={false}>
      {base.map(
        (baselayer) =>
          baselayer.show &&
          (baselayer.type === "tile" ? (
            <TileLayer url={baselayer.link} zIndex="1" />
          ) : (
            <WMSTileLayer
              url={baselayer.link}
              layers={baselayer.layer}
              format="image/png"
              zIndex="1"
            />
          ))
      )}
      {layerState.map(
        ( overlayer) =>
          overlayer.show && (
            <WMSTileLayer
              format="image/png"
              layers={overlayer.layer}
              url="https://apps.nesdr.gov.in:442/geoserver/wms"
              transparent="true"
              zIndex="10"
            />
          )
      )}
      {
          AnalyticsLayer.show && (
            <WMSTileLayer
              format="image/png"
              layers={AnalyticsLayer.layer}
              url="https://apps.nesdr.gov.in:442/geoserver/wms"
              transparent="true"
              zIndex="10"
            />
          )
      }
      <HandleClick />
      <HandleHover />
    </MapContainer>
  );
};

export default Map;
