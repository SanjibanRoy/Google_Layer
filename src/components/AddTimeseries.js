import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

function AddTimeseries({ test, showAnalytics, subclass, slide, options }) {
  let analyticslayer = null;

  console.log(options);
  console.log(test);

  const map = useMap();
  //   if (options !== test[0]) {
  //     analyticslayer=null
  //   }
  let prevLayer;
  if (
    map._layers[Object.keys(map._layers)[Object.keys(map._layers).length - 1]]
      .wmsParams !== undefined
  ) {
    prevLayer =
      map._layers[Object.keys(map._layers)[Object.keys(map._layers).length - 1]]
        .wmsParams.layers;
  }
  analyticslayer !== null && map.removeLayer(analyticslayer);

  useEffect(() => {
    if (test[0] !== prevLayer) {
      if (analyticslayer != null) {
        map.removeLayer(analyticslayer);
      }
      if (subclass == "WRF") {
        console.log("Inside WRF");
        if (analyticslayer != null) {
          map.removeLayer(analyticslayer);
        }
        analyticslayer = L.tileLayer.wms(test[1], {
          format: "image/png",
          layers:test[0],
          transparent: true,
          slide: test[0],
          zIndex: 10,
        });

        map.addLayer(analyticslayer);
      } else {
        analyticslayer = L.tileLayer.wms(test[1], {
          layers: test[0],
          format: "image/png",
          transparent: true,
          zIndex: 10,
        });
        map.addLayer(analyticslayer);
      }
    }
    // if (options == test[0]) {
    //     // analyticslayer=null
    //     map.addLayer(analyticslayer);

    //   }

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
