import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.vectorgrid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfoDetails } from "../features/layers/infoboxslice";

const VectorTile = ({ show, test }) => {
  // console.log("Vector TIles")

  const map = useMap();
  // useEffect(() => {
  var simpletyle = {
    weight: 1,
    color: "green",
    opacity: 1,
    fillColor: "yellow",
    fill: true,
    fillOpacity: 0.0,
    "line-width": {
      "base": 1,
      "stops": [
        [3, 1],
        [5, 1.2],
        [12, 3]
      ]
    }
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
    rendererFactory: L.canvas.tile,

    interactive: true,
    getFeatureId: function (f) {
      if (show === "State") {
      return f.properties.objectid;
      }
      else{
        return f.properties.gid;

      }
    },
    minZoom: show === "State"?5:9,
    maxZoom: show === "State"?9:15,
    zIndex:200,
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
  let dispatch = useDispatch()

  village.on("click", function (e) {
              dispatch(
                setInfoDetails({
                  // statename: result.features[0].properties.stname,
                  // distname: result.features[0].properties.dtname,
                })
              );



    previd !== undefined && village.resetFeatureStyle(previd);
    village.setFeatureStyle(show === "State"?e.layer.properties.objectid:e.layer.properties.gid, {
      weight: 1,
      color: "red",
      opacity: 1,
      fillColor: "yellow",
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
  !test&&map.removeLayer(village);

  useEffect(() => {
    console.log("HIHI")
    map.removeLayer(village);
  }, []);
  return null;
};

export default VectorTile;
