import React from "react";
import Stats from "./Stats";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectMapstate } from "../features/maps/mapStateSlice";
const InfoBox = () => {
  const state = useSelector(selectMapstate);
  const info = state.overlays.filter((layers)=>layers.class!=="Lightning");

  return (
    <InfoBoxx>
      <React.Fragment>
        {info[info.length-1] !== undefined &&
          
          info[info.length-1].stats&&<Stats info={info[info.length-1]} state={state} />
            
           
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
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);*/
    /* margin-left: 10px;  */
    margin-right: 15px;
  /* width: 20rem; */
`;
