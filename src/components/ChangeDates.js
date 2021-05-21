import React from "react";
import { useSelector } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/layerslice";
import { setAnalyticsVisual } from "../features/layers/layervisualiseslice";
import { useState, useEffect } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';



function ChangeDates() {
  const dispatch = useDispatch();
  const dispatch1 = useDispatch();
  const state = useSelector(selectDataSet);

  const setDate = (e) => {
    dispatch(setAnalyticsDetails({ ...state, dates: e, show: true }));
    dispatch1(setAnalyticsVisual({ show: false }));
  };

  const [date, setdate] = useState({
    dates: [],
    isFetching: false,
  });

  useEffect(() => {
    console.log("inside Effect");
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
    fetchDates();
  }, []);

  return (
    <div>
      {date.isFetching ? (
        <CircularProgress />
      ) : (
        <div>
          <select onChange={(event) => setDate(event.target.value)}>
            {date.dates.map((task, index) => (
              <option key={index} value={task.date}>
                {task.date}
              </option>
            ))}
          </select>
          <select onChange={(event) => setDate(event.target.value)}>
            {date.dates.map((task, index) => (
              <option key={index} value={task.date}>
                {task.date}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default ChangeDates;
