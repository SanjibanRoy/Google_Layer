import React from "react";
import LayersIcon from "@material-ui/icons/Layers";
import AppsIcon from "@material-ui/icons/Apps";
import HomeIcon from "@material-ui/icons/Home";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import MapIcon from "@material-ui/icons/Map";
import styled from "styled-components";
import InfoIcon from '@material-ui/icons/Info';
import $ from "jquery";
$(document).on("click", 'ul li', function(){
  $('ul li').removeClass('activetab');
  $(this).addClass('activetab');
});
const SidePanel = ({ changeVisibility, visibility }) => {
  return (
    <SIDEPANEL className="SidePanel">
      <ul>
        <li key={1}>
          <img src="./ASDMA.png" alt="nesdr-logo" />
        </li>
        <li
          className="activetab"
          key={4}
          onClick={() => changeVisibility("Alert")}
        >
          <HomeIcon />
          <span align="center">Home</span>
        </li>
        <li key={3} onClick={() => changeVisibility("Apps")}>
          <AppsIcon />
          <span align="center">Apps</span>
        </li>
        <li key={2} onClick={() => changeVisibility("Layer")}>
          <LayersIcon />
          <span align="center">Layers</span>
        </li>

        <li key={5} onClick={() => changeVisibility("Tools")}>
          <InfoIcon />
          <span align="center">Info</span>
        </li>
        <li key={6} onClick={() => changeVisibility("Stats")}>
          <InsertChartIcon />
          <span align="center">Stats</span>
        </li>
      </ul>
      <ul class="legend">
        <li key={3} onClick={() => changeVisibility("Alert")}>
          <MapIcon />
          <span align="center">Legend</span>
        </li>
      </ul>
    </SIDEPANEL>
  );
};

export default SidePanel;

export const SIDEPANEL = styled.div`
  .legend {
    position: absolute;
    bottom: 5%;
    left: 5%;
  }
  .activetab {
    background-color: #313a43;
    border-left: 3px solid blue;
    border-color: blue;
  }
`;
