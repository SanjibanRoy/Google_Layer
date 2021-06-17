import React from "react";
import Stats from "./Stats";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectMapstate } from "../features/maps/mapStateSlice";
const FocusBox = () => {
  const state = useSelector(selectMapstate);
  const info = state.overlays.filter((layers)=>layers.class!=="Lightning");

  return (
    <InfoBoxx>
      <React.Fragment>
        <p>Test</p>
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
    background: #171e26;
    align-items: center;
    width: 20rem;
    padding: 8px 10px;
    border-bottom: 1px solid #ccc;
    color:white;
  }
`;
