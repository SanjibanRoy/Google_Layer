import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

let analyticslayer = null;

function AddTimeseries({ test, showAnalytics, subclass, slide }) {
  console.log(subclass);
  let data = null;
  const map = useMap();
  useEffect(() => {
    if (analyticslayer != null) {
      map.removeLayer(analyticslayer);
    }
    if (subclass == "WRF") {
      analyticslayer = L.tileLayer.wms(test[1]+test[0], {
        format: "image/png",
        transparent: true,
        slide: slide,
        zIndex: 100,
      });
    } else {
      analyticslayer = L.tileLayer.wms(test[1], {
        layers: test[0],
        format: "image/png",
        transparent: true,
        zIndex: 100,
      });
    }
    map.addLayer(analyticslayer);
    if (!showAnalytics) {
      map.removeLayer(analyticslayer);
    }
  }, [test, showAnalytics]);

  useEffect(() => {
    return () => {
      map.removeLayer(analyticslayer);
    };
  }, []);

  return null;
}

export default AddTimeseries;
