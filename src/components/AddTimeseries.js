import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
let analyticslayer=null;

function AddTimeseries({ test, showAnalytics, subclass, slide, options }) {

  console.log(options);
  console.log(test);

  const map = useMap();
//   if (options !== test[0]) {
//     analyticslayer=null
//   }
  useEffect(() => {
    if (analyticslayer != null) {
      map.removeLayer(analyticslayer);
    }
    if (subclass == "WRF") {
        console.log("Inside WRF")
      analyticslayer = L.tileLayer.wms(test[1], {
        format: "image/png",
        transparent: true,
        slide: test[0],
        zIndex: 10,
      });
    } else {
      analyticslayer = L.tileLayer.wms(test[1], {
        layers: test[0],
        format: "image/png",
        transparent: true,
        zIndex: 10,
      });
    }
    // if (options == test[0]) {
    //     // analyticslayer=null
    //     map.addLayer(analyticslayer);

    //   }
      map.addLayer(analyticslayer);

    // map.addLayer(analyticslayer);
    // if (!showAnalytics) {
    //   map.removeLayer(analyticslayer);
    // }
  }, [test]);

  useEffect(() => {
    return () => {
      map.removeLayer(analyticslayer);
    };
  }, []);

  return null;
}

export default AddTimeseries;
