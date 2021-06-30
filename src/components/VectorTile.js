import React from 'react'
import {useMap} from "react-leaflet"
import L from "leaflet";

import "leaflet.vectorgrid";

export default VectorTile
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
        minZoom: 8,
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