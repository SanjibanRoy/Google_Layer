import React from "react";
import { useSelector } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
const Legend = () => {
  const tasks = useSelector(selectLayerDataSet);
  var sanju;
  var arr=[
    "NERDRR_NEW:mizoram_fire_vul_4326",
    "  NERDRR_NEW:megh_fire_vul_4326",
    "analytic:ner_landuse_landcover_50k_1st_cycle",
    "analytic:lulc2ndcycle",
    "analytic:lulc3rdcycle",
    "NEC:assam_census"
  ]
  return (
    <div className="Legend">
      {tasks
        .filter((task) => task.show === true)
        .map((task) => (
          //console.log(task.layer),
          sanju="https://geoserver.nesdr.gov.in:442/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=" + task.layer,
               arr.includes(task.layer)?<img src={sanju}/>:""
      // <p key={task.id}>{task.text}</p>
        ))}
    </div>
  );
};

export default Legend;
