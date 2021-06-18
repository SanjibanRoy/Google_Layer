import React from "react";
import Stats from "./Stats";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectInfo } from "../features/layers/infoboxslice";
import InfoIcon from "@material-ui/icons/Info";

const FocusBox = () => {
  const state = useSelector(selectInfo);
  console.log(state);
  return (
    <InfoBoxx>
      <React.Fragment>
        {state.districtname !== undefined ? (
          <p>
            <InfoIcon />
            Area of Focus: {state.districtname} (District)
          </p>
        ) : (
          <p>
            <InfoIcon />
            Area of Focus: {state.statename} (State)
          </p>
        )}
      </React.Fragment>
    </InfoBoxx>
  );
};
export default FocusBox;

const InfoBoxx = styled.div`
  top: 0px;
  right: 0px;
  position: absolute;
  background: rgba(0, 0, 0, 0.74);
  z-index: 10000;
  max-height: 80%;
  max-width: 20rem;
  overflow-y: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 10px;
  margin-right: auto;
  /* width: 20rem; */
  p {
    background: white;
    align-items: center;
    width: 20rem;
    padding: 8px 10px;
    border-bottom: 1px solid #ccc;
    color: black;
  }
  .MuiSvgIcon-root {
    font-size: 16px;
    cursor: pointer;
  }
`;
