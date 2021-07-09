import React from 'react';
import Slider from '@material-ui/core/Slider';
import {useState} from "react"
import { useDispatch } from "react-redux";
import {RangeStepInput} from 'react-range-step-input';
import {
  setAnalyticsDetails,
  selectLayerDataSet,
} from "../features/layers/overlaylayerslice";
import { useSelector } from "react-redux";
import { setLayerInfoDetails } from "../features/layers/layerinfoslice";

const TimeSlider = ({data, task, id}) => {
  console.log(id)
  const dispatch = useDispatch();
  const state = useSelector(selectLayerDataSet);

  const changeDate = (date, id) => {
    // var vall = document.getElementById("date");
    // var text = vall.options[vall.selectedIndex].text;
    // console.log(text);

  };

  let data1 = data.map((e)=>({value:e.value, label:e.text}))
  const [value, setValue] = useState();
  const [val, setVal] = useState();
  const updateRange = (e, val) => {
    setValue(data1.filter((e)=>e.value===val )[0].label)
    // dispatch(setAnalyticsDetails({ ...state, id: val - 1, show: false }));
    // setTimeout(console.log(""), 10000);

    dispatch(
      setAnalyticsDetails({
        ...state,
        id: id-1,
        show: true,
        layer: val,
        layer_date: value,
      })
    );
  };
  return (
    <div className="App">
        <Slider value={val}
         onChange={(updateRange)}
        // onChange={(updateRange) => {
        //   changeDate(updateRange.target.value, task.id);
        // }}
        min={1}
        max={48}/>
        <a> {value}</a>
    </div>
  );
 }
export default TimeSlider;


