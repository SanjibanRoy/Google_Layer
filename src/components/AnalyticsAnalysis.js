import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDataSet,
  setAnalyticsDetails,
} from "../features/layers/layerslice";
import {
  setAnalyticsVisual,
  selectLayerData,
} from "../features/layers/layervisualiseslice";
import styled from "styled-components";
import { analyticoper } from "../config";
import CircularProgress from "@material-ui/core/CircularProgress";

const AnalyticsAnalysis = () => {
  const [analytics, setanalytics] = useState("Change");
  const dispatch = useDispatch();
  // const dispatch1 = useDispatch();

  const state = useSelector(selectDataSet);
  // const [data, setData] = useState("modis_ndvi");
  const visualise = useSelector(selectLayerData);
  const setOperation = (e) => {
    dispatch(setAnalyticsDetails({ ...state, operation: e, show: true }));
    dispatch(setAnalyticsVisual({ ...visualise, show: false }));
  };

  const setDataset = (e) => {
    dispatch(setAnalyticsDetails({ ...state, dataset: e, show: true }));
    dispatch(setAnalyticsVisual({ ...visualise, show: false }));
  };

  const [date, setdate] = useState({
    dates: [],
    isFetching: false,
  });

  const setDate = (e) => {
    // getDates();

    dispatch(
      setAnalyticsVisual({
        ...state,
        show: true,
      })
    );
    // dispatch(setAnalyticsVisual({ ...visualise, show: false }));
  };

  const fetchDates = async () => {
    try {
      setdate({ dates: [], isFetching: false });
      const formData = new FormData();
      formData.append("database", state.dataset);
      formData.append("key", "mgy1exz0n8mXQXi8NrOq24DDvmLrZ16a");
      // console.log(formData);
      fetch("https://mobileapp.nesdr.gov.in/analytics_api/modis_ndvi.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          // console.log(result);
          setdate({ dates: result, isFetching: false });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      // console.log(response);
      setdate({ ...date, isFetching: true });
    } catch (exception) {
      console.log(exception);
      setdate({ dates: date.dates, isFetching: false });
    }
  };

  useEffect(() => {
    fetchDates();

    dispatch(
      setAnalyticsVisual({
        ...state,
        show: true,
      })
    );
    //dispatch(setAnalyticsVisual({ ...state, dates: document.getElementById("date").value, show: true }));
  }, [state.dataset]);

  useEffect(() => {
    dispatch(
      setAnalyticsVisual({
        ...state,
        dataset: document.getElementById("data").value,
        show: true,
      })
    );
    dispatch(
      setAnalyticsVisual({
        ...state,
        show: true,
      })
    );
    fetchDates();
  }, []);

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
        <option value="modis_ndvi">Sentinel 1</option>
        <option value="sentinal">Sentinel 2</option>
      </select>
      <div className="LayerTree">
        <p className="heads">Date</p>
      </div>
      {date.isFetching ? (
        <CircularProgress />
      ) : (
        <React.Fragment>
          <div>
            <select
              id="date"
              className="SelectMenu"
              onChange={(event) => setDate(event.target.value)}
            >
              {date.dates.map((task, index) => (
                <option key={index} value={task.time_stamp}>
                  {task.date}
                </option>
              ))}
            </select>
          </div>
        </React.Fragment>
      )}
      <div className="LayerTree">
        <p>Operations</p>
      </div>

      <select
        className="SelectMenu"
        onChange={(event) => {
          setOperation(event.target.value);
        }}
      >
        {/* {analyticoper
          .filter((operations) => operations.state === state.dataset)[0]
          .operations.map((ops) => ( */}
        <option value="NDVI">NDVI</option>
        <option value="SAVI">SAVI</option>
        <option value="NBR">NBR</option>
        <option value="NDWI">NDWI</option>
        <option value="EVI">EVI</option>
        <option value="Custom">Custom</option>

        {/* ))} */}
      </select>
    </VEGANALYSIS>
  );
};

export default AnalyticsAnalysis;

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
