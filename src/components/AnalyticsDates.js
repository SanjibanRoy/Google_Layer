import React from "react";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/layerslice";
var arrays = [
  {
    ndvidates: [200, 300],
    soil_moisture_dates: [200, 300],
    et_dates: [200, 300],
  },
];

function AnalyticsDates(changeLayer1, showLayer) {
  const dispatch = useDispatch();
  const setDate = (e) => {
    dispatch(
      setAnalyticsDetails({
        dates: [e],
      })
    );
  };
  return (
    <div>
      <select onChange={(event) => setDate(event.target.value, showLayer)}>
        {arrays[0].ndvidates.map((task, index) => (
          <option key={index} value={task}>
            {task}
          </option>
        ))}
      </select>
      <select onChange={(event) => changeLayer1(event.target.value, showLayer)}>
        {arrays[0].ndvidates.map((task, index) => (
          <option key={index} value={task}>
            {task}
          </option>
        ))}
      </select>
      <select onChange={(event) => changeLayer1(event.target.value, showLayer)}>
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
