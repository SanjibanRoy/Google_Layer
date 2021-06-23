import React from "react";
import { useSelector } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const SwipePanel = () => {
  const overlayLayers = useSelector(selectLayerDataSet);

  return (
    <div className="LayerTree">
      <Paper square>
        <Tabs
          value=""
          indicatorColor="primary"
          textColor="primary"
          onChange=""
          aria-label="disabled tabs example"
        >
          <Tab label="Left" />
          <Tab label="Right" />
        </Tabs>
      </Paper>
      <select
        onChange={(event) => {
          //   changeDate(event.target.value, task.id);
        }}
      >
        {overlayLayers.map((data, index) => (
            data.show&&<option value={data.value}> {data.text}</option>        ))}
      </select>

      <select
        onChange={(event) => {
          //   changeDate(event.target.value, task.id);
        }}
      >
        {overlayLayers.map((data, index) => (
            data.show&&<option value={data.value}> {data.text}</option>        ))}
      </select>
    </div>
  );
};

export default SwipePanel;
