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
import { analyticoper } from "../config";

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
  let data = null;
  console.log(test);

  test = test.filter((state) => state.show)[0];
  // console.log(test);
  test =
    test.operation === "visu"
      ? { ...test }
      : { ...test, dates: test.dates.join() };
  if (
    analyticoper.filter(
      (operations) => operations.state === test.dataset
    )[0] !== undefined
  ) {
    if (test.operation === "visu") {
      data = analyticoper.filter(
        (operations) => operations.state === test.dataset
      )[0].wmsname;
    } else {
      data = analyticoper.filter(
        (operations) => operations.state === test.dataset
      )[0].wmsname_op;
    }
  }
  const map = useMap();
  // console.log(test);

  if (analyticslayer != null) {
    map.removeLayer(analyticslayer);
  }
  analyticslayer = L.tileLayer.wms(
    "https://analytics.nesdr.gov.in/" +
      data +
      "/" +
      test.operation +
      "?date=" +
      test.dates,
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
        // console.log(e);
      },
    });
    return null;
  }
  const analyticsLayer = useSelector(selectDataSet);
  const baseLayers = useSelector(selectBaseDataSet);
  const analyticsvisualise = useSelector(selectLayerData);
  const overlayLayers = useSelector(selectLayerDataSet);
  // console.log(analyticsLayer);
  // console.log(visibility.filter((themes) => themes.id === "Layer"));
  const [overlays,setOverlays]= useState(overlayLayers)
  const [showAnalytics, setVisibility] = useState(
    visibility.filter((themes) => themes.id === "Layer")[0].show
  );
  // useEffect(() => {
  //   //AddAnalytics()
  //   setVisibility(visibility.filter((themes) => themes.id === "Layer")[0].show);
  // }, [visibility]);

  useEffect(() => {
   // AddAnalytics()
    console.log("Analyticcs Changed");
  }, [overlayLayers]);
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
          overlayer.show & overlayer.text!== "Flood Inundation" && (
            <WMSTileLayer
              key={index}
              format="image/png"
              layers={overlayer.layer}
              url={overlayer.link}
              transparent="true"
              zIndex="10"
            />
          )
      )}

      {
        <AddAnalytics
          test={[analyticsvisualise, analyticsLayer]}
          showAnalytics={showAnalytics}
        />
      }
      <HandleClick />
      <HandleHover />
    </MapContainer>
  );
};

export default Map;
