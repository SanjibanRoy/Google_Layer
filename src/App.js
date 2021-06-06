import { useState } from "react";
import Map from "./components/Map";
import InfoBox from "./components/InfoBox";
import Legend from "./components/Legend";
import SideBarWrapper from "./components/SideBarWrapper";
import { panelVisibilty } from "./config";
import LayerInfo from "./components/LayerInfo";

const App = () => {
  const [visibility, setVisibility] = useState(panelVisibilty);
  const [panel, setPanel] = useState(false);
  //toggle visibility
  const changeVisibility = (id) => {
    setVisibility(
      visibility.map((task) =>
        (task.id === id) & task.show
          ? { ...task, show: true, panel: false }
          : task.id === id
          ? { ...task, show: true, panel: true }
          : { ...task, show: false }
      )
    );

    visibility.map(
      (task) => (
        console.log(task.show),
        (task.id==id&task.show)&& setPanel(!panel)
      )
    );
    //changeVisibility: false
    console.log(visibility);
    //content
  };
  return (
    <div className="container">
      <SideBarWrapper
        visibility={visibility}
        changeVisibility={changeVisibility}
        showPanel={panel}
      />

      <Map visibility={visibility} />
      <InfoBox />
      <LayerInfo />
      <Legend />
    </div>
  );
};

export default App;
