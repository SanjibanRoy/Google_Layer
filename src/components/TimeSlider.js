import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {useState} from "react"
const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    display:"flex"
  },
  margin: {
    height: theme.spacing(3),
  },
}));




function valuetext(value) {
  return `${value}`;
}

export default function TimeSlider({data}) {
  let data1 = data.map((e)=>({value:e.value, label:e.text}))

  const [marks, setMarks] = useState(data1)
  console.log(data1)
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        // marks={marks}
        max={48}
      />
    </div>
  );
}
