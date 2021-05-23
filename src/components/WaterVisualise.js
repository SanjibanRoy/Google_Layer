import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LayerAnalyticsVisualise from "./LayerAnalyticsVisualise";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/layerslice";
import { useSelector } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";
import {
  setAnalyticsVisual,
  selectLayerData,
} from "../features/layers/layervisualiseslice";
import styled from "styled-components";

import CircularProgress from "@material-ui/core/CircularProgress";

const WaterVisualise = () => {
  const dispatch = useDispatch();

  const state = useSelector(selectLayerData);

  const setDate = (e) => {
    dispatch(setAnalyticsVisual({ ...state, dates: e, show: true }));
  };

  const setDataset = (e) => {
    dispatch(setAnalyticsVisual({ ...state, dataset: e }));
    // dispatch(
    //   setAnalyticsVisual({
    //     show: false,
    //   })
    // );
  };

  const [date, setdate] = useState({
    dates: [],
    isFetching: false,
  });

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
  }, [state.dataset]);

  useEffect(() => {
    dispatch(
      setAnalyticsVisual({ dataset: document.getElementById("data").value })
    );

    console.log("In effect Water");
    fetchDates();
  }, []);
  return (
    <VEGVISUALISE>
      <div className="LayerTree">
        <p className="heads">Dataset</p>
      </div>
      <select
        id="data"
        className="SelectMenu"
        onChange={(event) => setDataset(event.target.value)}
      >
        <option value="modis_water_level">MODIS Flood</option>
        <option value="">Water occourance Change</option>
        <option value="">Maximum water extent</option>
        <option value="">Water Transition</option>
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
    </VEGVISUALISE>
  );
};

export default WaterVisualise;

const VEGVISUALISE = styled.div`
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
