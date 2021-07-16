import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAnalyticsDetails,
  selectLayerDataSet,
} from "../features/layers/overlaylayerslice";
import { useSelector } from "react-redux";
import { setLayerInfoDetails } from "../features/layers/layerinfoslice";
import { red } from "@material-ui/core/colors";
import { ArrowLeft } from "@material-ui/icons";
var dat, finalvalue, finalvalu;
const useStyles = makeStyles((theme) => ({
  root: {
    width: 270,
    marginLeft: 20,
  },
  margin: {
    height: theme.spacing(10),
  },
  databox: {
    backgroundColor: "#ccc",
    textAlign: "center",
    width: "76%",
    marginLeft: "24%",
  },
}));
const PrettoSlider = withStyles({
  root: {
    color: "#4d77c7",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
const TimeSlider = ({ data, task, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(selectLayerDataSet);
  let data1 = data.map((e) => ({ value: e.value, label: e.text }));
  const [value, setValue] = useState();
  const [val, setVal] = useState();
  const updateRange = (e, val) => {
    setValue(data1.filter((e) => e.value === val)[0].label);
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    val < 24 ? (dat = today.toDateString()) : (dat = yesterday.toDateString());
    finalvalue = dat + ", " + value;
    // console.log(finalvalue);
    dispatch(
      setAnalyticsDetails({
        ...state,
        id: id - 1,
        show: true,
        layer: val,
        layer_date: value,
      })
    );
  };

  return (
    finalvalue == undefined
      ? (finalvalu = "Slide")
      : (finalvalu = finalvalue),
    <div className={classes.root}>
      <PrettoSlider value={val} onChange={updateRange} min={1} max={46} />
      <input
        className={classes.databox}
        type="textbox"
        value={finalvalu}
        disabled
      />
      &nbsp;
    </div>
  );
};
export default TimeSlider;
