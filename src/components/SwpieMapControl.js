import React from "react";
import "leaflet-side-by-side";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { selectSwipeDataSet } from "../features/layers/swipemapslice";
import { useSelector } from "react-redux";
// import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";

let sbs = null;
let rightlayer = null;
let leftlayer = null;
let baselayer = null;
const SwpieMapControl = ({ show }) => {
  const state = useSelector(selectSwipeDataSet);
  const layers = useSelector(selectLayerDataSet);
  // console.log(state);
  const map = useMap();

  let left = layers.filter((e) => e.id == state.leftmap);

  let right = layers.filter((e) => e.id == state.rightmap);
  // console.log(left);

  useEffect(() => {
    if (show) {
      rightlayer !== null && map.removeLayer(rightlayer);
      leftlayer !== null && map.removeLayer(leftlayer);
      sbs !== null && map.removeControl(sbs);
      baselayer === null &&
        (baselayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          zIndex: 99,
        }).addTo(map));
      right[0] === undefined
        ? (rightlayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map))
        : (rightlayer = L.tileLayer
            .wms(right[0].link, {
              layers: right[0].layer,
              format: "image/png",
              transparent: true,
              zIndex: 100,
            })
            .addTo(map));

      left[0] === undefined
        ? (leftlayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map))
        : (leftlayer = L.tileLayer
            .wms(left[0].link, {
              layers: left[0].layer,
              format: "image/png",
              transparent: true,
              zIndex: 100,
            })
            .addTo(map));

      sbs = L.control.sideBySide(rightlayer, leftlayer);
      sbs.addTo(map);
    } else {
      if (sbs !== null) {
        map.removeLayer(baselayer);
        map.removeControl(sbs);
        map.removeLayer(rightlayer);
        map.removeLayer(leftlayer);
      }
    }
  }, [show, state]);

  return null;
};

export default SwpieMapControl;
