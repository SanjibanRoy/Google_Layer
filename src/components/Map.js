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

function AddAnalytics({ test, showAnalytics }) {
  console.log(showAnalytics);
  const map = useMap();
  let data =
    test.dataset === "modis_ndvi"
      ? "modis_ndvi_visu"
      : test.dataset === "insat_rainfall"
      ? "insat_rain"
      : test.dataset === "lst_date"
      ? "lst"
      : test.dataset === "aod_date"
      ? "aod_visu"
      : test.dataset;

  if (analyticslayer != null) {
    map.removeLayer(analyticslayer);
  }
  analyticslayer = L.tileLayer.wms(
    "https://analytics.nesdr.gov.in/" + data + "/visu?date=" + test.dates,
    {
      // layers: this.props.tasks[e].layer,
      format: "image/png",
      transparent: true,
      zIndex: 100,
    }
  );
  map.addLayer(analyticslayer);
  if (showAnalytics) {
    map.removeLayer(analyticslayer);
  }
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
  console.log(analyticsLayer);
  console.log(visibility.filter((themes) => themes.id === "Layer"));
  const [showAnalytics, setVisibility] = useState(
    visibility.filter((themes) => themes.id === "Layer")[0].show
  );
  useEffect(() => {
    //AddAnalytics()
    setVisibility(visibility.filter((themes) => themes.id === "Layer")[0].show);
  }, [visibility]);

  useEffect(() => {
    //AddAnalytics()
    console.log("Analyticcs Changed");
  }, [analyticsLayer]);
  return (
    <MapContainer
      center={[26.2006, 92.9376]}
      zoom={6}
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
          overlayer.show && (
            <WMSTileLayer
              key={index}
              format="image/png"
              layers={overlayer.layer}
              url="https://apps.nesdr.gov.in:442/geoserver/wms"
              transparent="true"
              zIndex="10"
            />
          )
      )}

      {<AddAnalytics test={analyticsvisualise} showAnalytics={showAnalytics} />}
      <HandleClick />
      <HandleHover />
    </MapContainer>
  );
};

export default Map;
