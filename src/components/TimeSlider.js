import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import { useDispatch } from "react-redux";
// import {
//   setAnalyticsDetails,
//   selectLayerDataSet,
// } from "../features/layers/overlaylayerslice";
// import { useSelector } from "react-redux";
// import { setLayerInfoDetails } from "../features/layers/layerinfoslice";
// const Layer = ({ task, showLayer }) => {
//   const dispatch = useDispatch();
//   const state = useSelector(selectLayerDataSet);

//   const toggleLayer = (id, e) => {
//     dispatch(setAnalyticsDetails({ ...state, id: id - 1, show: e }));
//   };
//   const showInfo = (data, info) => {
//     dispatch(setLayerInfoDetails({ dataset: data, info: info, show: true }));
//   };
//   const changeDate = (date, id) => {
//     var vall = document.getElementById("date");
//     var text = vall.options[vall.selectedIndex].text;
//     console.log(text);
//     dispatch(setAnalyticsDetails({ ...state, id: id - 1, show: false }));
//     setTimeout(console.log(""), 10000);

//     dispatch(
//       setAnalyticsDetails({
//         ...state,
//         id: id - 1,
//         show: true,
//         layer: date,
//         layer_date: text,
//       })
//     );
//   };

// console.log(task.options)
// }
const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    display:"flex"
  },
  margin: {
    height: theme.spacing(3),
  },
}));
// const marks = [
//   {
//     value: 0,
//     label: '0°C',
//   },
//   {
//     value: 20,
//     label: '20°C',
//   },
//   {
//     value: 37,
//     label: '37°C',
//   },
//   {
//     value: 100,
//     label: '100°C',
//   },
// ];

function valuetext(value) {
  return `${value}`;
}

export default function TimeSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <PlayArrowIcon/>  
    <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        // marks={marks}
      />
    </div>
  );
}
