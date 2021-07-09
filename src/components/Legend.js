import { red } from "@material-ui/core/colors";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Legen from "./Legen";
const Legend = () => {
  const tasks = useSelector(selectLayerDataSet);
  var sanju;
  var arr = [
    "NEWRM:ne_earthquake",
    "NEC:ner_states",
    "analytic:ner_boundary"
  ];

  // let sstyle = {
  //   backgroundColor: "orange",
  //   color: "black",
  //   fontWeigth: "bold"
  // }
  return (
    //key={}>{task.text}
    <LSTYLE>
      <React.Fragment>
        <div className="Legend">
          {tasks
            .filter((task) => task.show === true)
            .map(
              (task, index) => (
              // console.log(task.text),
              //  console.log(task.layer),
             // console.log(task.legend),
                (sanju ="https://geoserver.nesdr.gov.in:442/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=" +task.layer+"&legend_options=fontSize:14;fontWeight:bold"),
                 !arr.includes(task.layer) && (
                  <div key={index}>
                    <Legen  sanju={sanju} task={task}/>
                  </div>
               )         
              )
            )}
        </div>
      </React.Fragment>
    </LSTYLE>
  );
};
export default Legend;
export const LSTYLE = styled.div`
  .visibility {
    display: none;
  }
  p {
    background: #014b96;
    color: white;
    font-weight: bold;
    font-size: 14px;
  }
  .MuiSvgIcon-root {
    font-size: 15px !important;
  }
`;
