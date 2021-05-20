import React from "react";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/layerslice";
import { useSelector } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";
import { setAnalyticsVisual } from "../features/layers/layervisualiseslice";
import { useState, useEffect } from "react";
var arrays = [
  {
    ndvidates: [200, 300],
    soil_moisture_dates: [200, 300],
    et_dates: [200, 300],
  },
];

// ******************************** fetch date data from database Start*******************************

// declare list of array *PS: array used in select in list
// main function *API Key Required
// function getdates(name, value) {
//   const formData = new FormData();
//   formData.append("database", "modis_ndvi");
//   formData.append("key", "mgy1exz0n8mXQXi8NrOq24DDvmLrZ16a");
//   console.log(formData);
//   fetch("https://mobileapp.nesdr.gov.in/analytics_api/modis_ndvi.php", {
//     method: "POST",
//     body: formData,
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       // console.log(result);
//       // let datafromapi = result.map(data => {
//       //     arrays[0][value].push({
//       //         value: data.date,
//       //         label: data.date,
//       //         rating: data.date
//       //     })
//       // })
//       console.log(result);
//       return result;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

// setTimeout(
//   function () {
//     // console.log(arrays.ndvidates[0].value)
//   }.bind(this),
//   2000
// );
//get date function *PS: put database name and array name used in select list
//getdates('modis_ndvi', 'ndvidates')
// getdates('soil_date', 'soil_moisture_dates')
// getdates('et', 'et_dates')

// ******************************** fatch date data from database End here*******************************

function AnalyticsDates() {
  const dispatch = useDispatch();
  const dispatch1 = useDispatch();
  const state = useSelector(selectDataSet);
  console.log(state)
  const setDate = (e) => {
    dispatch(setAnalyticsDetails({ ...state, dates: e, show: true }));
    dispatch1(setAnalyticsVisual({ show: false }));
  };

  const [date, setdate] = useState({
    dates: [],
    isFetching: true,
  });

  // useEffect(() => {
  //   console.log("Here")
  //   getdates('modis_ndvi', 'ndvidates')
  //   setdate(true)
  //   console.log(date)
  //   });

  useEffect(() => {
    console.log("inside Effect")
    const fetchDates = async () => {
      try {
        setdate({ dates: [], isFetching: true });
        const formData = new FormData();

        formData.append("database",state.dataset);
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
        setdate({  ...date, isFetching: false });
      } catch (exception) {
        console.log(exception);
        setdate({ dates: date.dates, isFetching: false });
      }
    };
    fetchDates();
  }, []);

  return (
    <div>
      {!date.isFetching ? (
        <div>
          <select onChange={(event) => setDate(event.target.value)}>
            {date.dates.map((task, index) => (
              <option key={index} value={task.date}>
                {task.date}
              </option>
            ))}
          </select>
          <select onChange={(event) => setDate(event.target.value)}>
            {arrays[0].ndvidates.map((task, index) => (
              <option key={index} value={task}>
                {task}
              </option>
            ))}
          </select>
          <select onChange={(event) => setDate(event.target.value)}>
            {arrays[0].ndvidates.map((task, index) => (
              <option key={index} value={task}>
                {task}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <>Loading</>
      )}
    </div>
  );
}

export default AnalyticsDates;
