import ChangeDates from "./ChangeDates";
import AnalyticsDates from "./AnalyticsDates";
import RGBDropDown from "./RGBDropDown";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/layerslice";
import { useSelector } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";
import { setAnalyticsVisual } from "../features/layers/layervisualiseslice";
import styled from "styled-components";
import { analyticoper } from "../config";

const VegetationAnalysis = () => {


  const [analytics, setanalytics] = useState("Change");
  const dispatch = useDispatch();
  const dispatch1 = useDispatch();

  const state = useSelector(selectDataSet);
  const [data, setData] = useState("modis_ndvi");

  const setOperation = (e) => {
    dispatch(setAnalyticsDetails({ ...state, operation: e }));
    dispatch(
      setAnalyticsVisual({
        show: false,
      })
    );
  };

  const setMask = (e) => {
    dispatch(setAnalyticsDetails({ ...state, mask: e }));
    dispatch(
      setAnalyticsVisual({
        show: false,
      })
    );
  };

  const setDataset = (e) => {
    dispatch(setAnalyticsDetails({ ...state, dataset: e }));
    dispatch(
      setAnalyticsVisual({
        show: false,
      })
    );
  };

  useEffect(() => {
    dispatch(
      setAnalyticsDetails({
        ...state,
        dataset: document.getElementById("data").value,
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
        <option value="modis_ndvi">Modis NDVI</option>
        <option value="et">MODIS ET</option>
        <option value="soil_date">Soil Moisture (SMAP)</option>
      </select>
      <div className="LayerTree">
        <p>Operations</p>
      </div>

      <select
        className="SelectMenu"
        onChange={(event) => {
          event.target.value === "difference"
            ? setanalytics("Change")
            : event.target.value === "rgb"
            ? setanalytics("RGB")
            : setanalytics("Anaytics");

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
        {/* <Todo /> */}
      </div>
      {analytics === "Change" ? (
        <ChangeDates />
      ) : analytics === "Anaytics" ? (
        <AnalyticsDates />
      ) : (
        <RGBDropDown />
      )}
      {state.dataset === "modis_ndvi" && (
        <>
          <div className="LayerTree">
            <p>Mask</p>
          </div>
          <select
            className="SelectMenu"
            onChange={(event) => setMask(event.target.value)}
          >
            <option value="none">None</option>
            <option value="forest">Forest</option>
            <option value="agriculture">Agriculture</option>
          </select>
        </>
      )}
    </VEGANALYSIS>
  );
};

export default VegetationAnalysis;

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
