import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import styled from "styled-components";
import { INFO } from "./Info";
import {useSelector} from "react-redux"
import{selectLayerDataSet} from "../features/layers/overlaylayerslice"
const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1000,
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alerts = () => {
      const classes = useStyles();
    const overlayLayers = useSelector(selectLayerDataSet);

  return (
    <>
    {overlayLayers.filter((e)=>e.text==="Flood Inundation")[0].show&& <INFO1>
      <Alert severity="error">Inundation map is based on pass of satellite image</Alert>
    </INFO1>}
      {overlayLayers.filter((e)=>e.text==="Thunderstorm Probable Index")[0].show&& <INFO1>
      <Alert severity="error">Currently no active Thunderstorm events</Alert>
    </INFO1>}
    {overlayLayers.filter((e)=>e.text==="Lightning Alerts")[0].show&& <INFO1>
      <Alert severity="error">Last Updated on 12 July 2021</Alert>
    </INFO1>}
    </>
  );
};

export default Alerts
const INFO1 = styled.div`
  .MuiAlert-root {
    position: absolute;
    display:flex;
    top: 0px;
    width: 15%;
    left: 50%;
    z-index: 10000;

  }
`;
