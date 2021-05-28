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
        task.id === id & task.show ? { ...task, show: true,panel:false }: task.id === id? { ...task, show: true,panel:true } : { ...task, show: false }
      )
    );
    //changeVisibility: false
      console.log(visibility)
    //content
  };
  return (
    <div className="container">
      <SideBarWrapper
        visibility={visibility}
        changeVisibility={changeVisibility}
      />

      <Map visibility={visibility} />
      <InfoBox />

      <Legend />
    </div>
  );
};

export default App;
