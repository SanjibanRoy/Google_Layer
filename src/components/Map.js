import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { selectBaseDataSet } from "../features/layers/baselayerslice";
import { selectLayerData } from "../features/layers/layervisualiseslice";
import { setMapState } from "../features/maps/mapStateSlice";
import React from "react";
import L from "leaflet";

function HandleHover() {
  const map = useMapEvents({
    mousemove: (e) => {
      //  console.log(e)
    },
  });
  return null;
}
let analyticslayer = null;

function AddAnalytics({ test }) {
  const map = useMap();
  if (analyticslayer != null) {
    map.removeLayer(analyticslayer);
  }
  analyticslayer = L.tileLayer.wms(
    "https://analytics.nesdr.gov.in/modis_ndvi_visu/visu?date=" + test,
    {
      // layers: this.props.tasks[e].layer,
      format: "image/png",
      transparent: true,
      zIndex: 100,
    }
  );
  map.addLayer(analyticslayer);
  return null;
}

const Map = ({ visibility }) => {

  const dispatch = useDispatch();
  function HandleClick() {
    const map = useMapEvents({
      click: (e) => {
        dispatch(
          setMapState({
            lat: e.latlng.lat,
            lon: e.latlng.lng,
            zoom: map.getZoom(),
            overlays: overlayLayers.filter((overlay) => overlay.show === true),
          })
        );
        console.log(e);
      },
    });
    return null;
  }
  const analyticsLayer = useSelector(selectDataSet);
  const baseLayers = useSelector(selectBaseDataSet);
  const analyticsvisualise = useSelector(selectLayerData);
  const overlayLayers = useSelector(selectLayerDataSet);
  useEffect(() => {
    //AddAnalytics()
  }, [analyticsvisualise, analyticsLayer]);
  return (
    <MapContainer center={[26.2006, 92.9376]} zoom={6} zoomControl={false}>
      {baseLayers.map(
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
      {overlayLayers.map(
        (overlayer) =>
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

      {<AddAnalytics test={analyticsvisualise[0].dates} />}
      <HandleClick />
      <HandleHover />
    </MapContainer>
  );
};

export default Map;
