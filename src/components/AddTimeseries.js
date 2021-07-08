import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

function AddTimeseries({ test, showAnalytics, subclass, slide, options }) {
  let analyticslayer = null;

   const map = useMap();
  //   if (options !== test[0]) {
  //     analyticslayer=null
  //   }
  let prevLayer;
  // if (
  //   map._layers[Object.keys(map._layers)[Object.keys(map._layers).length - 1]]
  //     .wmsParams !== undefined
  // ) {
  //   console.log(Object.keys(map._layers));
  //   prevLayer =
  //     map._layers[Object.keys(map._layers)[Object.keys(map._layers).length - 1]]
  //       .wmsParams.layers;
  
  // }
  analyticslayer !== null && map.removeLayer(analyticslayer);
  var keys_array = Object.keys(map._layers).map(key => parseInt(key))
  keys_array.map(d => {
    console.log(map._layers[d]._url)
      if (test[0] === map._layers[d].options.layers  ) {
        console.log(map._layers[d]._url)

           map.removeLayer(map._layers[d])
       }
  })
  useEffect(() => {
    // console.log(prevLayer);
    console.log(test[0]);
    // if (test[0] !== prevLayer) 
    {
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
          transparent: true,
          slide: test[0],
          zIndex: 10,
        });

        map.addLayer(analyticslayer);
      } else {
        if (analyticslayer != null) {
          map.removeLayer(analyticslayer);
        }
        analyticslayer = L.tileLayer.wms(test[1], {
          layers: test[0],
          format: "image/png",
          transparent: true,
          zIndex: 10,
        });
        map.removeLayer(analyticslayer);

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
      console.log("Unmounting");
      map.removeLayer(analyticslayer);
    };
  }, []);

  return null;
}

export default AddTimeseries;
