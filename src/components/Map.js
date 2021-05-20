import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  useMapEvents,
} from "react-leaflet";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { selectBaseDataSet } from "../features/layers/baselayerslice";
import { selectLayerData } from "../features/layers/layervisualiseslice";
import { setMapState } from "../features/maps/mapStateSlice";
import React from "react";

// function HandleClick() {
//   const map = useMapEvents({
//     click: (e) => {
//       dispatch({
//         lat:"test",
//         lon:"test2",
//         zoom:"3"
//       })
//       console.log(e);
//     },
//   });
//   return null;
// }

function HandleHover() {
  const map = useMapEvents({
    mousemove: (e) => {
      //  console.log(e)
    },
  });
  return null;
}

const Map = () => {
  const [AnalyticsLayer, SetAnalytics] = useState({
    show: false,
  });
  const dispatch = useDispatch();
  function HandleClick() {
    const map = useMapEvents({
      click: (e) => {
        dispatch(
          setMapState({
            lat: e.latlng.lat,
            lon: e.latlng.lng,
            zoom: map.getZoom(),
            overlays: overlayLayers.filter((overlay)=>overlay.show===true)
          })
        );
        console.log(e);
      },
    });
    return null;
  }
  const analyticsLayer = useSelector(selectDataSet);
  const baseLayers = useSelector(selectBaseDataSet);
  console.log(analyticsLayer);
  const analyticsvisualise = useSelector(selectLayerData);
  console.log(analyticsvisualise);
  const overlayLayers = useSelector(selectLayerDataSet);

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
      {AnalyticsLayer.show && (
        <WMSTileLayer
          format="image/png"
          layers={AnalyticsLayer.layer}
          url="https://apps.nesdr.gov.in:442/geoserver/wms"
          transparent="true"
          zIndex="10"
        />
      )}
      <HandleClick />
      <HandleHover />
    </MapContainer>
  );
};

export default Map;
