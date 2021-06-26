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
                    <img  key={task.id} src={task.legend}/>
        ))}
    </div>
  );
};

export default Legend;
