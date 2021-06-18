import React from "react";
import LayerInfo from "./components/LayerInfo";
import StatsBox from "./components/StatsBox"
import FocusBox from "./components/FocusBox"
import styled from "styled-components"


const Infowrapper = () => {
  return (
    <Wrapper>
      <FocusBox />
      <InfoBox />
      <StatsBox />
      <LayerInfo />
    </Wrapper>
  );
};

export default Infowrapper;

export const Wrapper = styled.div`
top: 80px;
right: 0px;
position: absolute;
`