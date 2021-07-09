import React from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from "react"
import { useDispatch } from "react-redux";
import {
  setAnalyticsDetails,
  selectLayerDataSet,
} from "../features/layers/overlaylayerslice";
import { useSelector } from "react-redux";
import { setLayerInfoDetails } from "../features/layers/layerinfoslice";
import { red } from '@material-ui/core/colors';
import { ArrowLeft } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 280,
    marginLeft:10,
  },
  margin: {
    height: theme.spacing(10),
  },
  databox: {
    backgroundColor:'#ccc',
    textAlign :'center',
    width:'28%',
    marginLeft:'72%',

  },
}));
const TimeSlider = ({data, task, id}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(selectLayerDataSet);
  let data1 = data.map((e)=>({value:e.value, label:e.text}))
  const [value, setValue] = useState();
  const [val, setVal] = useState();
  const updateRange = (e, val) => {
    setValue(data1.filter((e)=>e.value===val )[0].label)
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
    <div className={classes.root}>
        <Slider value={val}
        onChange={(updateRange)}
        min={1}
        max={46}/>
        <input className={classes.databox} type="textbox" value={value} disabled/>
        &nbsp;
    </div>
  );
 }
export default TimeSlider;


