import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  useMapEvents,
  FeatureGroup,
  useMap,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { selectBaseDataSet } from "../features/layers/baselayerslice";
import { setMapState } from "../features/maps/mapStateSlice";
import React from "react";
import L from "leaflet";
// import Draw from "leaflet-draw";
import { EditControl } from "react-leaflet-draw";
import "leaflet.vectorgrid";
import "leaflet-side-by-side";
import SwpieMapControl from "../components/SwpieMapControl";
let sbs = null;
let rightlayer = null;
let leftlayer = null;
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
    <EditControl position="bottomright" />
  </FeatureGroup>
);
const VectorTile = ({ show }) => {
  console.log("Hi");
  const map = useMap();
  // useEffect(() => {
  var vectorTileOptions = {
    interactive: true,
    pane: "OverlayPane",
    vectorTileLayerStyles: {
      AP_VILLAGE_V2: {
        weight: 0,
        fillColor: "#9bc2c4",
        fillOpacity: 1,
        fill: true,
      },
    },
  };

  let village = L.vectorGrid.protobuf(
    "http://geoserver.vassarlabs.com/geoserver/gwc/service/wmts?layer=VASSARLABS:AP_VILLAGE_V2&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/x-protobuf;type=mapbox-vector&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}",
    {
      interactive: true,
      minZoom:8,
      maxZoom: 12,
      vectorTileLayerStyles: {
        AP_VILLAGE_V2: function (properties, zoom) {
          return {
            weight: 2,
            color: "green",
            opacity: 1,
            fillColor: "yellow",
            fill: true,

						fillOpacity: 0.3,
          };
        },
      },
    }
  );
  village
    .on("click", function (e) {
      console.log(e.layer);
      L.DomEvent.stop(e);
    })
    .addTo(map);
  // const vectorTileOptions = {
  //   AP_VILLAGE_V2: {
  //     weight: 0,
  //     fillColor: "#9bc2c4",
  //     fillOpacity: 1,
  //     fill: true,
  //   },
  //   interactive: true,
  //   pane: "OverlayPane",
  // };
  // }, []);

  return null;
};

let analyticslayer = null;

function AddAnalytics({ test, showAnalytics }) {
  console.log(test);
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
            <TileLayer
              key={index}
              url={baselayer.link}
              domain={baselayer.domain}
              zIndex="1"
            />
          ) : baselayer.type === "vectortile" ? (
            <VectorTile
            // key={index}
            // url={baselayer.link}
            // layers={baselayer.layer}
            // format="image/png"
            // zIndex="1"
            />
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
              zIndex={overlayer.class === "Administrative" ? "15" : "10"}
            />
          )
      )}
      {overlayLayers.map(
        (overlayer, index) =>
          overlayer.show & (overlayer.options !== undefined) && (
            <AddAnalytics
              key={index}
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
      {/* <Toolbar /> */}
      <FeatureGroup>
        <EditControl
          position="bottomleft"
          draw={{
            rectangle: false,
          }}
        />
      </FeatureGroup>
      {
        <SwpieMapControl
          show={visibility.filter((e) => e.id === "Tools")[0].show}
        />
      }
      {/* <VectorTile /> */}
      <HandleClick />
      <HandleHover />
    </MapContainer>
  );
};

export default Map;
