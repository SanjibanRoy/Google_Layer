import { useMap } from "react-leaflet";
import L from "leaflet";
import { analyticoper } from "../config";
let analyticslayer = null;

const AddAnalyticsLayer = ({ test, showAnalytics }) => {
  let data = null;
  test = test.filter((state) => state.show)[0];
  console.log(test);

  // console.log(test);
  test =
    test.operation === "visu"
      ? { ...test }
      : { ...test, dates: test.dates.join() };
  if (
    analyticoper.filter(
      (operations) => operations.state === test.dataset
    )[0] !== undefined
  ) {
    if (test.operation === "visu") {
      data = analyticoper.filter(
        (operations) => operations.state === test.dataset
      )[0].wmsname;
    } else {
      data = analyticoper.filter(
        (operations) => operations.state === test.dataset
      )[0].wmsname_op;
    }
  }
  const map = useMap();
  // console.log(test);

  if (analyticslayer != null) {
    map.removeLayer(analyticslayer);
  }
  if (test.dataset == "sentinel1") {
    analyticslayer = L.tileLayer.wms(
      "https://analytics.nesdr.gov.in/nerdrr_sentinel_1/visu?band=0",
      {
        // date: test.dates,
        format: "image/png",
        transparent: true,
      }
    );
  }
  else{
  if (test.operation === "visu") {
    analyticslayer = L.tileLayer.wms(
      "https://analytics.nesdr.gov.in/nerdrr_sentinel_2/" +
        test.operation +
        "?",
      {
        date: test.dates,
        format: "image/png",
        transparent: true,
        zIndex: 100,

        band1: test.bands !== undefined && test.bands[0],
        band2: test.bands !== undefined && test.bands[1],
        band3: test.bands !== undefined && test.bands[2],
        //  }),
        //   ...(data === "modis_flood" && {
        //     fromrange: test.fromrange,
        //     torange: test.torange,
        //   }),
      }
    );
  } else if (test.operation === "custom") {
    analyticslayer = L.tileLayer.wms(
      "https://analytics.nesdr.gov.in/nerdrr_sentinel_2/custom?exp=(b8-b4)%2F(b8%2Bb4)&color=default&from=-1.0&to=1.0",
      {
        date: test.dates,
        format: "image/png",
        transparent: true,
        // zIndex: 100,

        //  }),
        //   ...(data === "modis_flood" && {
        //     fromrange: test.fromrange,
        //     torange: test.torange,
        //   }),
      }
    );
  } else {
    analyticslayer = L.tileLayer.wms(
      "https://analytics.nesdr.gov.in/nerdrr_sentinel_2/oper?color=default&from=-1.0&to=1.0&oper=" +
        test.operation +
        "&dataset=sentinal2",
      {
        date: test.dates,
        format: "image/png",
        transparent: true,
        zIndex: 100,

        //  }),
        //   ...(data === "modis_flood" && {
        //     fromrange: test.fromrange,
        //     torange: test.torange,
        //   }),
      }
    );
  }
}
  map.addLayer(analyticslayer);
  if (showAnalytics) {
    console.log(showAnalytics);
    map.removeLayer(analyticslayer);
  }
  return null;
};

export default AddAnalyticsLayer;
