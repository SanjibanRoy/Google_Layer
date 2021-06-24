//import necessary lib
import React from "react";
import SidePanel from "./SidePanel";
import LayerTree from "./LayerTree";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import BaseSwitcher from "./BaseSwitcher";
import AlertPanel from "./AlertPanel";
import AppsPanel from "./AppsPanel";
import SwipePanel from "./SwipePanel";

// import CreatableSelect from 'react-select/creatable';
//end of import

const SideBarWrapper = ({
  //   analyticsLayers,
  changeVisibility,
  visibility,
  showPanel,
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
      <SidePanel changeVisibility={changeVisibility} visibility={visibility} />
      {/* load of side panel start */}

      {/* *************Layer Tab start*************** */}
      {showPanel && (
        <React.Fragment>
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
              <LayerTree category="Water Resources" />
              <LayerTree category="Forestry" />
              <LayerTree category="CropDAMS" />
              <LayerTree category="Geosciences" />
              <LayerTree category="Lightning" />
              <LayerTree category="Alerts and Early Warning" />
            </div>
          </div>
          {/* *************Layer Tab end*************** */}

          {/* *************Vegetation Tab start*************** */}
          <div className={type === "Apps" ? "LayerContainer" : "hidden"}>
            <AppsPanel />
          </div>
          <div className={type === "Alert" ? "LayerContainer" : "hidden"}>
            <AlertPanel />
          </div>
          <div className={type === "Tools" ? "LayerContainer" : "hidden"}>
            <SwipePanel />
          </div>
          <div className={type === "Stats" ? "LayerContainer" : "hidden"}>
            <AlertPanel />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default SideBarWrapper;
