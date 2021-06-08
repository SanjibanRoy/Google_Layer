import React from "react";
import Info from "./Info";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectMapstate } from "../features/maps/mapStateSlice";
const InfoBox = () => {
  const state = useSelector(selectMapstate);
  const info = state.overlays.filter((layers)=>layers.class!=="Lightning");

  return (
    <InfoBoxx>
      <React.Fragment>
        {info !== undefined &&
          info.map((task, index) => (
            <Info key={index} info={task} state={state} />
          ))}
      </React.Fragment>
    </InfoBoxx>
  );
};
export default InfoBox;

const InfoBoxx = styled.div`
  top: 8px;
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
`;
