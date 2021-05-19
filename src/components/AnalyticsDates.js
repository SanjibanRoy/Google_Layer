import React from "react";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/layerslice";
import { useSelector } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";
import { setAnalyticsVisual } from "../features/layers/layervisualiseslice";

var arrays = [
  {
    ndvidates: [200, 300],
    soil_moisture_dates: [200, 300],
    et_dates: [200, 300],
  },
];

function AnalyticsDates() {
  const dispatch = useDispatch();
  const dispatch1 = useDispatch()
  const state = useSelector(selectDataSet);

  const setDate = (e) => {
    dispatch(setAnalyticsDetails({ ...state, dates: e, show:true }));
    dispatch1(setAnalyticsVisual({show:false}))
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
