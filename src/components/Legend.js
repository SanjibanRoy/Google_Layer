import React from "react";
import { useSelector } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
const Legend = () => {
  const tasks = useSelector(selectLayerDataSet);

  return (
    <div className="Legend">
      {tasks
        .filter((task) => task.show === true)
        .map((task) => (
          console.log( task.layer),
          task.layer == "NERDRR_NEW:mizoram_fire_vul_4326" ? 
          <img src="https://geoserver.nesdr.gov.in:442/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=NERDRR_NEW:mizoram_fire_vul_4326"/>:""
       
          // <p key={task.id}>{task.text}</p>
        ))}
    </div>
  );
};

export default Legend;
