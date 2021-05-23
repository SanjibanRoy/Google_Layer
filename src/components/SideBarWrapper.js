//import necessary lib
import React from "react";
import SidePanel from "./SidePanel";
import LayerTree from "./LayerTree";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import VegetationAnalysis from "./VegetationAnalysis";
import BaseSwitcher from "./BaseSwitcher";
import WeatherVisualise from "./WeatherVisualise";
import VegetationVisualise from "./VegetationVisualise";
import WaterVisualise from "./WaterVisualise";
import SatelliteVisualise from "./SatelliteVisualise";
// import CreatableSelect from 'react-select/creatable';
//end of import

const SideBarWrapper = ({
  //   analyticsLayers,
  changeVisibility,
  visibility,
}) => {
  //Tab view start
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //tab view ends

  //accordion start
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  const classes = useStyles();

  //hind show sideBarwarapper start
  var data_filter = visibility.filter((element) => element.show);
  var type = data_filter[0].id;
  // hide show sideBarWrapper ends

  // ******************************** fatch date data from database End here*******************************

  //return view
  return (
    <div className="SideBarWrapper">
      {/* load of side panel start */}
      <SidePanel changeVisibility={changeVisibility} />
      {/* load of side panel start */}

      {/* *************Layer Tab start*************** */}

      <div className={type === "Layer" ? "LayerContainer" : "hidden"}>
        {/* List of map layers */}
        <Paper square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Base Layers" />
            <Tab label="Overlays" />
          </Tabs>
        </Paper>
        <div className={value === 0 ? " " : "hidden"}>
          <BaseSwitcher />
        </div>
        <div className={value === 1 ? " " : "hidden"}>
          <LayerTree category="Administrative" />
          <LayerTree category="Land Use/Land Cover" />
          <LayerTree category="Census" />
        </div>
      </div>
      {/* *************Layer Tab end*************** */}

      {/* *************Vegetation Tab start*************** */}
      {type === "Vegetation" ? (
        <div className="LayerContainer">
          {/* Tab View */}
          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Visualization" />
              <Tab label="Analysis" />
            </Tabs>
          </Paper>
          {/* Tab1 Data */}
          <div className={value === 0 ? " " : "hidden"}>
            <VegetationVisualise />
          </div>
          {/* Tab2 Data */}
          <div className={value === 1 ? " " : "hidden"}>
            <VegetationAnalysis />
          </div>
        </div>
      ) : type === "Weather" ? (
        <div className={type === "Weather" ? "LayerContainer" : "hidden"}>
          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Visualization" />
              <Tab label="Analysis" />
            </Tabs>
          </Paper>
          {/* Tab1 Data */}
          <div className={value === 0 ? " " : "hidden"}>
            <WeatherVisualise />
          </div>
          {/* Tab2 Data */}
          <div className={value === 1 ? " " : "hidden"}>
            <VegetationAnalysis />
          </div>
        </div>
      ) : type === "Water_Resources" ? (
        <div
          className={type === "Water_Resources" ? "LayerContainer" : "hidden"}
        >
          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Visualization" />
              <Tab label="Analysis" />
            </Tabs>
          </Paper>
          {/* Tab1 Data */}
          <div className={value === 0 ? " " : "hidden"}>
            <WaterVisualise />
          </div>
          {/* Tab2 Data */}
          <div className={value === 1 ? " " : "hidden"}>
            <VegetationAnalysis />
          </div>
        </div>
      ) : type === "Satellite_Imagery" ? (
        <div
          className={type === "Satellite_Imagery" ? "LayerContainer" : "hidden"}
        >
          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Visualization" />
              <Tab label="Analysis" />
            </Tabs>
          </Paper>
          {/* Tab1 Data */}
          <div className={value === 0 ? " " : "hidden"}>
            <SatelliteVisualise />
          </div>
          {/* Tab2 Data */}
          <div className={value === 1 ? " " : "hidden"}>
            <VegetationAnalysis />
          </div>
        </div>
      ) : (
        <div
          className={type === "Vedas_Services" ? "LayerContainer" : "hidden"}
        >
          <LayerTree category="Admin" state="test" />
          <LayerTree category="Natural Resource" />
        </div>
      )}

      
    </div>
  );
};

export default SideBarWrapper;
