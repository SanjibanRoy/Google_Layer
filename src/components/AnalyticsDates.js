import React from "react";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/layerslice";
import { useSelector } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";

var arrays = [
  {
    ndvidates: [200, 300],
    soil_moisture_dates: [200, 300],
    et_dates: [200, 300],
  },
];

function AnalyticsDates() {
  const dispatch = useDispatch();
  const state = useSelector(selectDataSet);

  const setDate = (e) => {
    dispatch(setAnalyticsDetails({ ...state, dates: e }));
  };

  return (
    <div>
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
      <select onChange={(event) => setDate(event.target.value)}>
        {arrays[0].ndvidates.map((task, index) => (
          <option key={index} value={task}>
            {task}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AnalyticsDates;
