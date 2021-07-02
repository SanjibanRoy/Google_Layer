import {useMap} from "react-leaflet"
import L from "leaflet";
import "leaflet.vectorgrid";
import { useEffect } from "react";

const VectorTile = ({ show }) => {




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

  //  "http://geoserver.vassarlabs.com/geoserver/gwc/service/wmts?layer=VASSARLABS:AP_VILLAGE_V2&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/x-protobuf;type=mapbox-vector&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}",

  let village = L.vectorGrid.protobuf(
    "https://apps.nesdr.gov.in:442/geoserver/NEC/gwc/service/wmts?layer=NEC:ner_states&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/x-protobuf;type=mapbox-vector&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}",
    {
      interactive: true,
      getFeatureId: function (f) {
        return f.properties.gid;
      },
      minZoom: 5,
      maxZoom: 15,
      vectorTileLayerStyles: {
        ner_states: function (feature, zoom) {
          // console.log(feature)

          return simpletyle;
        },
      },
    }
  );

  let previd;
  village.on("click", function (e) {
    previd!==undefined&&village.resetFeatureStyle(previd)
    village.setFeatureStyle(e.layer.properties.gid, {
      weight: 2,
      color: "green",
      opacity: 1,
      fillColor: "red",
      fill: true,
      fillOpacity: 1.0,
    });

    previd = e.layer.properties.gid;

    // var layer = e.layer.options;
    // e.layer.options.color = "red"
    // village.setFeatureStyle(7,highlighted)
  });
  village.addTo(map);
  useEffect(()=>{
    map.removeLayer(village)
  },[])
  return null;
};

export default VectorTile
