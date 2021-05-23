import React from "react";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/layerslice";
import { useSelector } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";
import { setAnalyticsVisual } from "../features/layers/layervisualiseslice";
import { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
var arrays = [
  {
    ndvidates: [200, 300],
    soil_moisture_dates: [200, 300],
    et_dates: [200, 300],
  },
];

function AnalyticsDates() {
  const dispatch = useDispatch();
  const dispatch1 = useDispatch();
  const state = useSelector(selectDataSet);

  const setDate = (e) => {
    let fromyear = document.getElementById("fromyear").value;
    let toyear = document.getElementById("toyear").value;
    let date = document.getElementById("date").value;

    dispatch(
      setAnalyticsDetails({
        ...state,
        dates: [date, fromyear, toyear],
        show: true,
      })
    );
    dispatch1(setAnalyticsVisual({ show: false }));
  };

  const [date, setdate] = useState({
    dates: [],
    isFetching: false,
  });

  // useEffect(() => {
  //   console.log("Here")
  //   getdates('modis_ndvi', 'ndvidates')
  //   setdate(true)
  //   console.log(date)
  //   });

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
  }, [state.dataset]);

  return (
    <ANALYTICS>
      {date.isFetching ? (
        <CircularProgress />
      ) : (
        <React.Fragment>
          <div className="Analytics">
            <p>Date</p>
            <select
              id="date"
              className="SelectMenu"
              onChange={(event) => setDate(event.target.value)}
            >
              {date.dates.map((task, index) => (
                <option key={index} value={task.date}>
                  {task.date}
                </option>
              ))}
            </select>
          </div>
          <div className="Analytics">
            <p>From Year</p>
            <select
              id="fromyear"
              className="SelectMenu"
              onChange={(event) => setDate(event.target.value)}
            >
              {arrays[0].ndvidates.map((task, index) => (
                <option key={index} value={task}>
                  {task}
                </option>
              ))}
            </select>
          </div>
          <div className="Analytics">
            <p>To Year</p>
            <select
              id="toyear"
              className="SelectMenu"
              onChange={(event) => setDate(event.target.value)}
            >
              {arrays[0].ndvidates.map((task, index) => (
                <option key={index} value={task}>
                  {task}
                </option>
              ))}
            </select>
          </div>
        </React.Fragment>
      )}
    </ANALYTICS>
  );
}

export default AnalyticsDates;

const ANALYTICS = styled.div`
  margin: 0px;
  margin-left: 30px;
  padding: 0px;
  margin-right: 30px;
  .Analytics {
    display: flex;
    justify-content: space-between;
    /* margin: auto; */
    top: 50%;
  }
  .Analytics > p {
    margin-top: 15px;
  }
  .SelectMenu {
    width: 50%;
  }
`;
