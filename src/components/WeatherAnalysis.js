import ChangeDates from "./ChangeDates";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/layerslice";
import { useSelector } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";
import {
  setAnalyticsVisual,
  selectLayerData,
} from "../features/layers/layervisualiseslice";
import styled from "styled-components";
import { analyticoper } from "../config";

const WeatherAnalysis = () => {
  console.log(analyticoper);
  const [analytics, setanalytics] = useState("Change");
  const dispatch = useDispatch();

  const state = useSelector(selectDataSet);
  const visualise = useSelector(selectLayerData);

  // const [data, setData] = useState("insat_rainfall");
  console.log(state);
  const setOperation = (e) => {
    dispatch(setAnalyticsDetails({ ...state, operation: e, show: true  }));
    dispatch(setAnalyticsVisual({ ...visualise, show: false }));
  };

  const setMask = (e) => {
    dispatch(setAnalyticsDetails({ ...state, mask: e }));
    dispatch(setAnalyticsVisual({ ...visualise, show: false }));
  };

  const setDataset = (e) => {
    console.log(state)
    dispatch(setAnalyticsDetails({ ...state, dataset: e, show: true }));
    dispatch(setAnalyticsVisual({ ...visualise, show: false }));
    console.log(state)

  };

  useEffect(() => {
    dispatch(
      setAnalyticsDetails({
        ...state,
        dataset: document.getElementById("data").value,
        operation: document.getElementById("operation").value,

      })
    );
  }, []);

  return (
    <VEGANALYSIS>
      <div className="LayerTree">
        <p className="heads">Dataset</p>
      </div>
      <select
        id="data"
        className="SelectMenu"
        onChange={(event) => setDataset(event.target.value)}
      >
        <option value="insat_rain">INSAT Rainfall</option>
        <option value="lst_date">MODIS LST</option>
        <option value="aod_date">MODIS AOD</option>
      </select>
      <div className="LayerTree">
        <p>Operations</p>
      </div>

      <select
        className="SelectMenu"
        id ="operation"
        onChange={(event) => {
          setOperation(event.target.value);
        }}
      >
        {analyticoper
          .filter((operations) => operations.state === state.dataset)[0]
          .operations.map((ops) => (
            <option value={ops.value}>{ops.text}</option>
          ))}
      </select>
      <div className="LayerTree">
        <p>Dates</p>
      </div>
      <ChangeDates />
    </VEGANALYSIS>
  );
};

export default WeatherAnalysis;

const VEGANALYSIS = styled.div`
  font-family: "Poppins", sans-serif;
  /* padding-right: 15px;
    padding-left: 15px;  */
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  .heads {
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    border-bottom: black;
  }
  .SelectMenu {
    border: 1px solid #555;
    border-radius: 4px;
    box-shadow: none;
    font-size: 12px;
    font-weight: 400;
    /* width: 5000px; */
    display: block;
    width: 70%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 40px;
    margin-right: 10px;
  }
`;
