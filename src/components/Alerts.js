import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import styled from "styled-components";
import { INFO } from "./Info";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1000,
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Alerts = () => {
  //   const classes = useStyles();

  return (
    <INFO1>
      <Alert severity="error">This is an error alert — check it out!</Alert>
    </INFO1>
  );
};

const INFO1 = styled.div`
  .MuiAlert-root {
    position: absolute;
    top: 0px;
    width: 50%;
    left: 50%;
    z-index: 10000;

  }
`;
