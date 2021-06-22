import React from "react";
import LayerInfo from "./LayerInfo";
import StatsBox from "./StatsBox";
import FocusBox from "./FocusBox";
import styled from "styled-components";
import InfoBox from "./InfoBox";
import Cbutton from "./collapsebutton";
const Infowrapper = ({ visibility }) => {
  console.log(visibility);
  return (
    <Wrapper>
       <Cbutton/>
    </Wrapper>
  );
};
export default Infowrapper;
const Wrapper = styled.div`
color:white;
top: 0px;
right: 0px;
position: absolute;
z-index:100000;
`;
