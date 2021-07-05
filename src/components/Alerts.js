import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import styled from "styled-components";
import { INFO } from "./Info";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import {useSelector} from "react-redux"

// import React from 'react'

const Alerts = () => {

  const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1000,
    width: "10%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
   const classes = useStyles();
   const tasks = useSelector(selectLayerDataSet);
  console.log(tasks.filter((e)=>e.text==="Flood Inundation")[0].show)
return (
    <INFO1>
      {tasks.filter((e)=>e.text==="Flood Inundation")[0].show&& <Alert className = "Test" severity="error">Flood inundation displayed is based on pass of satellite imagery</Alert>}
    </INFO1>
  )
}


export default Alerts



const INFO1 = styled.div`

    position: absolute;
    display:flex;
    top: 0px;
    width: 50%;
    left: 25%;
    backgroud:'green';
    z-index: 10000;
`;
