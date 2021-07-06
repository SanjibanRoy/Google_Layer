import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

function AddTimeseries({ test, showAnalytics, subclass, slide, options }) {
  let analyticslayer = null;
  console.log(subclass)
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
        console.log(map._layers)
  }

  console.log(prevLayer)
  analyticslayer !== null && map.removeLayer(analyticslayer);

  useEffect(() => {
    

      if (subclass == "WRF") {
        console.log("Inside WRF");
       
        analyticslayer = L.tileLayer.wms(test[1], {
          format: "image/png",
          layers:test[0],
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
      if (test[0] !== prevLayer) {
      map.addLayer(analyticslayer);

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
    console.log(analyticslayer)
    return () => {
      map.removeLayer(analyticslayer);
    };
  }, []);

  return null;
}

export default AddTimeseries;
