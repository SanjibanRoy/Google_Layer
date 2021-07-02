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
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { selectBaseDataSet } from "../features/layers/baselayerslice";
import { setMapState } from "../features/maps/mapStateSlice";
import { selectMapZoomstate } from "../features/maps/mapZoomSlice";
import React from "react";
import L from "leaflet";
// import Draw from "leaflet-draw";
import { EditControl } from "react-leaflet-draw";
import "leaflet.vectorgrid";
import "leaflet-side-by-side";
import SwpieMapControl from "./SwpieMapControl";
import AddAnalyticsLayer from "./AddAnalyticsLayer";
import { selectLayerData } from "../features/layers/layervisualiseslice";
import { selectDataSet } from "../features/layers/layerslice";
import AddTimeseries from "./AddTimeseries";
import { setMapBounds } from "../features/maps/mapZoomSlice";
import VectorTile from "./VectorTile";
import Overlays from "./Overlays";
import MarkersAdd from "./MarkersAdd";

//**************Map Controls***********/
const ZoomtoLocation = ({ bounds }) => {
  console.log(bounds);
  const map = useMap();
  // map.fitBounds([40.712, -74.227],
  //   [40.774, -74.125])
  useEffect(() => {
    if (bounds.bounds !== undefined) {
      map.fitBounds([
        // 88.0130594750001478,21.9401104670001814 : 97.4115970890000540,29.4616322430000537

        [bounds.bounds[0], bounds.bounds[3]],
        [bounds.bounds[1], bounds.bounds[2]],
      ]);
    }
  }, [bounds]);
  useEffect(() => {
    map.fitBounds([
      // 88.0130594750001478,21.9401104670001814 : 97.4115970890000540,29.4616322430000537

      [21.9401104670001814, 97.411597089000054],
      [29.4616322430000537, 88.0130594750001478],
    ]);
  }, []);

  return null;
};

function HandleHover() {
  const map = useMapEvents({
    mousemove: (e) => {
      //  console.log(e)
    },
  });
  return null;
}

const Map = ({ visibility }) => {
  // console.log(visibility);
  const dispatch = useDispatch();
  const [showAnalytics, setVisibility] = useState(
    visibility.filter((themes) => themes.id === "Layer")[0].show
  );
  const baseLayers = useSelector(selectBaseDataSet);
  const overlayLayers = useSelector(selectLayerDataSet);
  const analyticsLayer = useSelector(selectDataSet);
  const [navigation, setNavigation] = useState(false);
  const analyticsvisualise = useSelector(selectLayerData);
  const mapZoomState = useSelector(selectMapZoomstate);

  useEffect(() => {
    setVisibility(visibility.filter((themes) => themes.id === "Layer")[0].show);
  }, [visibility]);

  useEffect(() => {
    setNavigation(false);
    if (mapZoomState.path != "") {
      setNavigation(true);
    } else {
      setNavigation(false);
    }
  }, [mapZoomState.path]);

  function HandleClick() {
    const map = useMapEvents({
      click: (e) => {
        console.log(e);
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

  const drawing = (e) => {
    let json = e.sourceTarget._layers;
    setTimeout(1000);
    Object.keys(json).forEach(function (key) {
      if (json[key]._mRadius !== undefined) {
        console.log(json[key]);
        dispatch(
          setMapBounds({
            lat: json[key]._latlng.lat,
            lon: json[key]._latlng.lng,
            radius: json[key]._mRadius,
          })
        );
      }
    });
  };

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
            <TileLayer
              key={index}
              url={baselayer.link}
              domain={baselayer.domain}
              zIndex="1"
            />
          ) : baselayer.type === "vectortile" ? (
            <VectorTile />
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
          overlayer.show & (overlayer.text === "State Boundary") && (
            <VectorTile show="State" />
          )
        // (overlayer.show & overlayer.text==="District Boundary")&&<VectorTile show="District"/>
      )}
      {overlayLayers.map(
        (overlayer, index) =>
          overlayer.show & (overlayer.text === "District Boundary") && (
            <VectorTile show="District" />
          )
        // (overlayer.show & overlayer.text==="District Boundary")&&<VectorTile show="District"/>
      )}
      {overlayLayers.map(
        (overlayer, index) =>
          overlayer.show && <Overlays overlayer={overlayer} index={index} />
      )}

      {/* <Toolbar /> */}
      <FeatureGroup>
        <EditControl
          position="bottomright"
          draw={{
            rectangle: false,
            circlemarker: false,
          }}
          onDrawStop={(e) => {
            drawing(e);
          }}
        />
      </FeatureGroup>
      {
        <SwpieMapControl
          show={visibility.filter((e) => e.id === "Tools")[0].show}
        />
      }
      {visibility.filter((e) => e.id === "Stats")[0].show && (
        <AddAnalyticsLayer
          test={[analyticsvisualise, analyticsLayer]}
          showAnalytics={showAnalytics}
        />
      )}
      <ZoomtoLocation bounds={mapZoomState} />
      {mapZoomState.path != "" && <GeoJSON data={mapZoomState.path} />}
      {(mapZoomState.villages != "") & (mapZoomState.villages != undefined) && (
        <FeatureGroup>
          {mapZoomState.villages.map((e) => (
            <Marker position={[e.lat, e.lng]}></Marker>
          ))}
        </FeatureGroup>
      )}
      {/* <MarkersAdd/> */}

      <HandleClick />
      <HandleHover />
    </MapContainer>
  );
};

export default Map;
