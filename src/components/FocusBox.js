import React from "react";
import Stats from "./Stats";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectInfo } from "../features/layers/infoboxslice";
import InfoIcon from "@material-ui/icons/Info";

const FocusBox = () => {
  const state = useSelector(selectInfo);
 // console.log(state);
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
  right: 0px;
  background: white;
  z-index: 10000;
  max-height: 80%;
  max-width: 25rem;
  overflow-y: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 0px;
  margin-right: auto;
  /* width: 20rem; */
  p {
    background: #eaeaea;
    align-items: center;
    width: 25rem;
    max-width: 25rem;
    padding: 8px 10px;
    border-bottom: 1px solid #ccc;
    font-weight:bold;
    color: #215a93;
  }
  .MuiSvgIcon-root {
    font-size: 16px;
    cursor: pointer;
  }
`;
