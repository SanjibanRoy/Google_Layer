import React from "react";
import LayerInfo from "./LayerInfo";
import StatsBox from "./StatsBox";
import FocusBox from "./FocusBox";
import styled from "styled-components";
import InfoBox from "./InfoBox";

const Infowrapper = ({ visibility }) => {
  console.log(visibility);
  return (
    <Wrapper>
      {visibility.filter((e) => e.show)[0].id === "Stats" && <FocusBox />}
      {true && <InfoBox />}
      {visibility.filter((e) => e.show)[0].id === "Stats" && <StatsBox />}
    </Wrapper>
  );
};

export default Infowrapper;

const Wrapper = styled.div`
  /* top: 80px;
right: 0px;
position: absolute; */
`;
