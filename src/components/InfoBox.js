import React from "react";
import Info from "./Info";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectMapstate } from "../features/maps/mapStateSlice";
const InfoBox = () => {
  const state = useSelector(selectMapstate);
  const info = state.overlays.filter((layers) => layers.class !== "Lightning");
  console.log(info)
  return (
    <InfoBoxx>
      <React.Fragment>
      {(info.length<1) ?<h1 style={{color:"black"}}>No Data</h1> : 
        info !== undefined &&
          info.map((task, index) => (
            <Info key={index} info={task} state={state} />
          ))
        }
      </React.Fragment>
    </InfoBoxx>
  );
};
export default InfoBox;

const InfoBoxx = styled.div`
  right: 0px;
  background: white;
  z-index: 10000;
  max-height: 80%;
  max-width: 20rem;
  width:100%;
  height:100%;
  padding-left: 10px;

   overflow-y: none; 
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25); */
  /* margin-left: 10px;  */
  margin-right: 15px;
  /* width: 20rem; */
  p {
    background: #215a93;
    align-items: center;
    width: 20rem;
    /* padding: 8px 10px; */
    border-bottom: 1px solid #ccc;
  }
`;
