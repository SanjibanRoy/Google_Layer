import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

let analyticslayer = null;

function AddTimeseries({ test, showAnalytics }) {
  console.log(test);
  let data = null;
  const map = useMap();
  useEffect(() => {
    if (analyticslayer != null) {
      map.removeLayer(analyticslayer);
    }
    analyticslayer = L.tileLayer.wms(test[1], {
      layers: test[0],
      format: "image/png",
      transparent: true,
      zIndex: 100,
    });
    map.addLayer(analyticslayer);
    if (!showAnalytics) {
      map.removeLayer(analyticslayer);
    }
  }, [test, showAnalytics]);

  useEffect(() => {
    return () => {
    //    if (!showAnalytics) {
            map.removeLayer(analyticslayer);
    //      }  
        //   else{
        //     map.addLayer(analyticslayer);

        //   }
    };
  }, []);

  return null;
}

export default AddTimeseries