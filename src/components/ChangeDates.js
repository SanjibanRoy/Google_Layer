import React from "react";
import { useSelector } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/layerslice";
import { setAnalyticsVisual } from "../features/layers/layervisualiseslice";
import { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

function ChangeDates() {
  const dispatch = useDispatch();
  const dispatch1 = useDispatch();
  const state = useSelector(selectDataSet);

  const setChangeDate = () => {
    let fromdate=document.getElementById('fromdate').value
    let todate=document.getElementById('todate').value
    dispatch(setAnalyticsDetails({ ...state, dates: [fromdate,todate], show: true }));
    dispatch1(setAnalyticsVisual({ show: false }));
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



  return (
    <CHANGE>
      {date.isFetching ? (
        <CircularProgress />
      ) : (
        <React.Fragment>
          <div className="Change">
            <p>From Date</p>
            <select id="fromdate"
              className="SelectMenu"
              onChange={() => setChangeDate()}
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
              className="SelectMenu"
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
  .SelectMenu {
    width: 50%;
    margin-left: 20px;
  }
`;
