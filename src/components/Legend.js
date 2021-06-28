import { red } from "@material-ui/core/colors";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const Legend = () => {
  const [showlegend, setShowlegend] = useState(true);
  const tasks = useSelector(selectLayerDataSet);
  var sanju;
  var arr = [
    "NERDRR_NEW:mizoram_fire_vul_4326",
    "  NERDRR_NEW:megh_fire_vul_4326",
    "analytic:ner_landuse_landcover_50k_1st_cycle",
    "analytic:lulc2ndcycle",
    "analytic:lulc3rdcycle",
    "NEC:assam_census"
  ]
  // let sstyle = {
  //   backgroundColor: "orange",
  //   color: "black",
  //   fontWeigth: "bold"
  // }
  return (
    (
    //key={}>{task.text}
    <LSTYLE>
      <React.Fragment >
        <div className="Legend">
          {tasks
            .filter((task) => task.show === true)
            .map((task) => (
              //console.log(task.layer),
              sanju = "https://geoserver.nesdr.gov.in:442/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=" + task.layer,
              arr.includes(task.layer) ?
                <>
                  <p onClick={() => setShowlegend(!showlegend)}>
                    {showlegend ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon />
                    )}
                    {task.text}
                    {/* {console.log(task.id)} */}
                  </p>
                  <div className={`${showlegend ? "" : "visibility"}`}>
                    <img src={sanju} />
                  </div>
                </> : ""
            ))}
        </div>
      </React.Fragment>
    </LSTYLE>
     )
  );
};
export default Legend;
export const LSTYLE = styled.div`
.visibility {
  display: none;
}
p {
  background: #014B96;
  color:white;
  font-weight:bold;
  font-size:14px;
}
.MuiSvgIcon-root {
  font-size:15px !important;
}
`;