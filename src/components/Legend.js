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
          <p key={task.id}>{task.text}</p>
        ))}
    </div>
  );
};

export default Legend;
