import React from 'react'
import Info from './Info'
import styled from "styled-components";

import {useSelector} from 'react-redux'
import {selectMapstate }from "../features/maps/mapStateSlice"
const InfoBox = () => {
    // console.log({info})
    const state = useSelector(selectMapstate)
    console.log(state)
    const  info = state.overlays
    
    return (
        <InfoBoxx>
        {
            info!==undefined?(
               info.map((task, index) => (
                    <Info key={index} info={task} state ={state} />
                  ))
            
            
            
            ):"Info Box"
        }
        </InfoBoxx>
    )
}
export default InfoBox

const InfoBoxx = styled.div`
  top: 8px;
  right: 0px;
  position: absolute;
  background-color: #fff;
  z-index: 10000;
`;