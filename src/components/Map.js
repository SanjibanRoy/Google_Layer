import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  useMapEvents,
  FeatureGroup,
  useMap,
} from "react-leaflet";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { selectBaseDataSet } from "../features/layers/baselayerslice";
import { setMapState } from "../features/maps/mapStateSlice";
import React from "react";
import L from "leaflet";
import { EditControl } from "react-leaflet-draw"

function HandleHover() {
  const map = useMapEvents({
    mousemove: (e) => {
      //  console.log(e)
    },
  });
  return null;
}

const Toolbar = () => (
  <FeatureGroup>
     <EditControl
      position='bottomright'
    />
  </FeatureGroup>
);

let analyticslayer = null;

function AddAnalytics({ test, showAnalytics }) {
  let data = null;
  const map = useMap();

  if (analyticslayer != null) {
    map.removeLayer(analyticslayer);
  }
  analyticslayer = L.tileLayer.wms(test[1], {
    layers: test[0],
    format: "image/png",
    transparent: true,
    zIndex: 100,
  });
  map.addLayer(analyticslayer);
  if (!showAnalytics) {
    map.removeLayer(analyticslayer);
  }
  return null;
}

const Map = ({ visibility }) => {
  console.log(visibility);
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
            bbox: map.getBounds().toBBoxString(),
            shape: map.getSize(),
            point: map.latLngToContainerPoint(e.latlng, map.getZoom()),
          })
        );
      },
    });
    return null;
  }
  const baseLayers = useSelector(selectBaseDataSet);
  const overlayLayers = useSelector(selectLayerDataSet);

  useEffect(() => {}, []);
  return (
    <MapContainer
      center={[26.2006, 92.5376]}
      zoom={7}
      zoomControl={false}
      attributionControl={false}
    >
      {baseLayers.map(
        (baselayer, index) =>
          baselayer.show &&
          (baselayer.type === "tile" ? (
            <TileLayer key={index} url={baselayer.link} zIndex="1" />
          ) : (
            <WMSTileLayer
              key={index}
              url={baselayer.link}
              layers={baselayer.layer}
              format="image/png"
              zIndex="1"
            />
          ))
      )}
      {overlayLayers.map(
        (overlayer, index) =>
          overlayer.show &
            ((overlayer.text !== "Flood Inundation") &
              (overlayer.class !== "Lightning")) && (
            <WMSTileLayer
              key={index}
              format="image/png"
              layers={overlayer.layer}
              url={overlayer.link}
              transparent="true"
              zIndex={overlayer.class==="Administrative"?"15":"10"}
            />
          )
      )}

      {overlayLayers.map(
        (overlayer, index) =>
          overlayer.text === "Flood Inundation" && (
            <AddAnalytics
              test={[overlayer.layer, overlayer.link]}
              showAnalytics={overlayer.show}
            />
          )
      )}
      {overlayLayers.map(
        (overlayer, index) =>
          overlayer.show & (overlayer.class === "Lightning") && (
            <TileLayer
              key={index}
              url={overlayer.link + "&t=" + Math.floor(+new Date() / 1000)}
              zIndex="10"
            />
          )
      )}
      <Toolbar />
      <HandleClick />
      <HandleHover />
    </MapContainer>
  );
};

export default Map;
