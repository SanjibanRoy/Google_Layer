import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.vectorgrid";
import { useEffect } from "react";

const VectorTile = ({ show }) => {
  // console.log("Vector TIles")

  console.log(show);
  const map = useMap();
  // useEffect(() => {
  var simpletyle = {
    weight: 2,
    color: "green",
    opacity: 1,
    fillColor: "yellow",
    fill: true,
    fillOpacity: 0.0,
  };

  let url;
  if (show === "State") {
    url =
      "https://apps.nesdr.gov.in:442/geoserver/NEC/gwc/service/wmts?layer=NEC:ner_states&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/x-protobuf;type=mapbox-vector&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}";
  }
  if (show === "District") {
    url =
      "https://apps.nesdr.gov.in:442/geoserver/gwc/service/wmts?layer=analytic:ner_district_boundary&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/x-protobuf;type=mapbox-vector&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}";
  }
  //  "http://geoserver.vassarlabs.com/geoserver/gwc/service/wmts?layer=VASSARLABS:AP_VILLAGE_V2&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/x-protobuf;type=mapbox-vector&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}",

  let village = L.vectorGrid.protobuf(url, {
    interactive: true,
    getFeatureId: function (f) {
      if (show === "State") {
      return f.properties.objectid;
      }
      else{
        return f.properties.gid;

      }
    },
    minZoom: show === "State"?5:10,
    maxZoom: show === "State"?9:15,
    vectorTileLayerStyles: {
      ner_states: function (feature, zoom) {
        // console.log(feature)

        return simpletyle;
      },
      ner_district_boundary: function (feature, zoom) {
        // console.log(feature)

        return simpletyle;
      },
    },
  });

  let previd;
  village.on("mouseover", function (e) {
    console.log(show);

    previd !== undefined && village.resetFeatureStyle(previd);
    console.log(e.layer.properties.objectid);
    village.setFeatureStyle(show === "State"?e.layer.properties.objectid:e.layer.properties.gid, {
      weight: 2,
      color: "red",
      opacity: 1,
      fillColor: "",
      fill: true,
      fillOpacity: 0.0,
    });
    if (show === "State") {
      previd = e.layer.properties.objectid;
    }
      else{
        previd = e.layer.properties.gid;

      }
  });
  village.addTo(map);
  useEffect(() => {
    map.removeLayer(village);
  }, []);
  return null;
};

export default VectorTile;
