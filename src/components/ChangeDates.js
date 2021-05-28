import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails, selectDataSet } from "../features/layers/layerslice";
import { setAnalyticsVisual, selectLayerData } from "../features/layers/layervisualiseslice";
import { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

function ChangeDates() {
  const dispatch = useDispatch();
  const state = useSelector(selectDataSet);
  const visualise = useSelector(selectLayerData);

  const setChangeDate = () => {
    let fromdate=document.getElementById('fromdate').value
    let todate=document.getElementById('todate').value
    dispatch(setAnalyticsDetails({ ...state, dates: [fromdate,todate], show: true }));
    dispatch(setAnalyticsVisual({ ...visualise, show: false }));
  };

  const [date, setdate] = useState({
    dates: [],
    isFetching: false,
  });

  const fetchDates = async () => {
    try {
      setdate({ dates: [], isFetching: false });
      const formData = new FormData();
      console.log(state)
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
      setdate({ ...date, isFetching: true });
    } catch (exception) {
      console.log(exception);
      setdate({ dates: date.dates, isFetching: false });
    }
  };

  useEffect(() => {
    // console.log("inside Effect");
    // console.log(state)
    fetchDates();
  }, []);

  useEffect(() => {
    // console.log("inside Effect");
    // console.log(state)
    fetchDates();
  }, [state.dataset]);

  return (
    <CHANGE>
      {
      date.isFetching ? (
        <CircularProgress />
      ) : (
        <React.Fragment>
          <div className="Change">
            <p>From Date</p>
            <select id="fromdate"
              className="SelectMenu1"
              value={{ label: 200, value: 2000 }}

              onChange={() => setChangeDate()}
              defaultValue={{ label: 200, value: 2000}}
            >
              {date.dates.map((task, index) => (
                <option key={index} value={task.time_stamp}>
                  {task.date}
                </option>
              ))}
            </select>
          </div>
          <div className="Change">
            <p>To Date</p>
            <select id="todate"
              className="SelectMenu1"
              onChange={() => setChangeDate()}
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
    </CHANGE>
  );
}

export default ChangeDates;

const CHANGE = styled.div`
  margin: 0px;
  margin-left: 20px;
  margin-right: 40px;
  .Change {
    display: flex;
    justify-content: space-between;
    /* margin: auto; */
    top: 50%;
  }
  .Change > p {
    margin-top: 15px;
  }
  .SelectMenu1 {
    border: 1px solid #555;
    border-radius: 4px;
    box-shadow: none;
    font-size: 12px;
    font-weight: 400;
    /* width: 5000px; */
    display: block;
    width: 50%;
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
