import { useState } from "react";
import Map from "./components/Map";
import InfoBox from "./components/InfoBox";
import Legend from "./components/Legend";
import SideBarWrapper from "./components/SideBarWrapper";
import { panelVisibilty } from "./config";

const App = () => {
  const [visibility, setVisibility] = useState(panelVisibilty);

  //toggle visibility
  const changeVisibility = (id) => {
    setVisibility(
      visibility.map((task) =>
        task.id === id ? { ...task, show: true } : { ...task, show: false }
      )
    );
    //changeVisibility: false

    //content
  };
  return (
    <div className="container">
      <SideBarWrapper
        visibility={visibility}
        changeVisibility={changeVisibility}
      />

      <Map />
      <InfoBox         visibility={visibility}
/>

      <Legend />
    </div>
  );
};

export default App;
