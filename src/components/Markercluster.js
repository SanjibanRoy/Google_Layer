import React from "react";
import { useState, useEffect, useRef } from "react";
import { FeatureGroup, Marker, Popup, useMap } from "react-leaflet";
import { CompassCalibrationOutlined, ContactsOutlined, Equalizer } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import L from 'leaflet';
import { GeoJSON } from 'react-leaflet';
import forecasticon from './../pic/rainy.png';
import nowcasticon from './../pic/rain1.png';
const LayerGroup = (url) => {
  var abc;
  let marker;
  let layerGroup;
  let map = useMap();
  const mapRef = useRef();
  const tasks = useSelector(selectLayerDataSet);
  const [gjson, setGjson] = useState({ data: [], isFetching: false });
  const nowmyicon = new L.Icon({
    iconUrl: nowcasticon,
    iconSize: [26, 26],
    popupAnchor: [0, -15],
    shadowAnchor: [13, 28]
  })
  const foremyicon = new L.Icon({
    iconUrl: forecasticon,
    iconSize: [26, 26],
    popupAnchor: [0, -15],
    shadowAnchor: [13, 28]
  })
  useEffect(() => {
    fetch(url.url, {
      method: "GET",
    })
      .then(response => response.text())
      .then((mydata) => {
        var b = mydata.slice(0, mydata.lastIndexOf('}') + 1)
        var c = b.substring(b.indexOf('"') - 1)
        var iman = []
        abc = JSON.parse("{" + c)

        abc.features.filter(assam => assam.geometry.coordinates[1] > 24.13333 && assam.geometry.coordinates[1] < 28.03333).map(newcoordinates => (
          newcoordinates.geometry.coordinates[0] > 89.7 && newcoordinates.geometry.coordinates[0] < 96 ?
            iman.push(newcoordinates) : ""
        ))
        let newcor = iman.map((e) => ({
          "lng": e.geometry.coordinates[0],
          "lat": e.geometry.coordinates[1],
          "property": e.properties.name,
        }));
        layerGroup = L.layerGroup().addTo(map);
        for (var i = 0; i < iman.length; i++) {
          var feat = iman[i];
          var proper = iman[i].properties.name;
          var date=iman[i].properties.event_date;
          var time=iman[i].properties.event_time;
          var value=iman[i].properties.value;
          console.log(iman[i].properties)
          if (proper == "HEAVY RAIN") {
              marker = L.marker(L.GeoJSON.coordsToLatLng(feat.geometry.coordinates), {
              icon: nowmyicon,
            }).bindPopup(
              "<table><tr><th><a style='font-weight:bold'>"+iman[i].properties.name+"</a></th></tr>"+
              "<tr><th><a>(Forecast)</a></th></tr>"
              +"<tr style='background-color:#cccccc'><th>Coordinates</th><td>"+iman[i].geometry.coordinates[1]+","+iman[i].geometry.coordinates[0]
              +"</td></tr><tr><th>Date</th><td>"+date
              +"</td></tr><tr style='background-color:#cccccc'><th>Time</th><td>"+time
              +"</td></tr><tr><th>Value</th><td>"+value+"</td></tr></table>");
          } else {
            var marker = L.marker(L.GeoJSON.coordsToLatLng(feat.geometry.coordinates), {
              icon: foremyicon,
            }).bindPopup(
              "<table><tr><th><a style='font-weight:bold'>"+iman[i].properties.name+"</a></th></tr>"+
              "<tr><th><a>(Nowcast)</a></th></tr>"
              +"<tr style='background-color:#cccccc'><th>Coordinates</th><td>"+iman[i].geometry.coordinates[1]+","+iman[i].geometry.coordinates[0]
              +"</td></tr><tr><th>Date</th><td>"+iman[i].properties.forecast_date
              +"</td></tr><tr style='background-color:#cccccc'><th>Time</th><td>"+iman[i].properties.forecast_time
              +"</td></tr><tr><th>Value</th><td>"+iman[i].properties.rad_inf+"</td></tr></table>");
          }
          layerGroup.addLayer(marker);
        }
      })
  }, [])

  useEffect(() => {
    return () => {
     map.removeLayer(layerGroup);
    };
  }, []);
  return null;
};
export default LayerGroup;
