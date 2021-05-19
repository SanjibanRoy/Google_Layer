import ChangeDates from "./ChangeDates";
import AnalyticsDates from "./AnalyticsDates";
import RGBDropDown from "./RGBDropDown";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/layerslice";
import {useSelector} from 'react-redux';
import {selectDataSet} from '../features/layers/layerslice'
import { setAnalyticsVisual } from "../features/layers/layervisualiseslice";

// import todos from "../redux/reducers/todos";
// import Todo from "./Todo"
const VegetationAnalysis = () => {
  const [analytics, setanalytics] = useState("rgb");
  const dispatch = useDispatch();
  const state = useSelector(selectDataSet)

  const setOperation = (e) => {
    console.log(e)
    dispatch(
      setAnalyticsDetails({...state,
        operation: e,
      })
    );
    dispatch(
      setAnalyticsVisual({
        show: false,
      })
    );
  };

  const setMask = (e) => {
    console.log(e)
    dispatch(
      setAnalyticsDetails({...state,
        mask: e,
      })
    );
    dispatch(
      setAnalyticsVisual({
        show: false,
      })
    );
  };

  const setDataset = (e) => {
    dispatch(
      setAnalyticsDetails({...state,
        dataset: e,
      })
    );
    dispatch(
      setAnalyticsVisual({
        show: false,
      })
    );
  };
  return (
    <div>
      <div className="LayerTree">
        <p>Dataset</p>
      </div>
      <select onChange={(event) => setDataset(event.target.value)}>
        <option value="ndvi">Modis NDVI</option>
        <option value="et">MODIS ET</option>
        <option value="smap">Soil Moisture (SMAP)</option>
      </select>
      <div className="LayerTree">
        <p>Operations</p>
      </div>
      <select
        onChange={(event) => {
          event.target.value === "Difference"
            ? setanalytics("Change")
            : event.target.value === "rgb"
            ? setanalytics("RGB")
            : setanalytics("Anaytics");

            setOperation(event.target.value);        }}
      >
        <option value="Anomaly">Anomaly</option>
        <option value="Difference">Difference</option>
        <option value="Maximum">Maximum</option>
        <option value="Minimum">Minimum</option>
        <option value="sd">Standard Deviation</option>
        <option value="trend">Trend</option>
        <option value="vci">Vegetation Condition Analysis(VCI)</option>
        <option value="threshold">Long Term Threshold</option>
        <option value="rgb">RGB</option>
      </select>
      <div className="LayerTree">
        <p>Dates</p>
        {/* <Todo /> */}

      </div>
      {analytics === "Change" ? (
        <ChangeDates />
      ) : analytics === "Anaytics" ? (
        <AnalyticsDates />
      ) : (
        <RGBDropDown />
      )
    }

      <div className="LayerTree">
        <p>Mask</p>
      </div>
      <select onChange={(event) => setMask(event.target.value)}>
        <option value="none">None</option>
        <option value="forest">Forest</option>
        <option value="agriculture">Agriculture</option>
      </select>
    </div>
  );
};

export default VegetationAnalysis;
