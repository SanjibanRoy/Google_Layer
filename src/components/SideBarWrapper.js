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
  // accordion ends

  //hind show sideBarwarapper start
  var data_filter = visibility.filter((element) => element.show);
  var type = data_filter[0].id;
  // hide show sideBarWrapper ends

  // ******************************** fetch date data from database Start*******************************

  // declare list of array *PS: array used in select in list

  //main function *API Key Required
  // function getdates(name, value) {
  //     const formData = new FormData();
  //     formData.append('database', name);
  //     fetch(
  //         'https://mobileapp.nesdr.gov.in/analytics_api/modis_ndvi.php?key=mgy1exz0n8mXQXi8NrOq24DDvmLrZ16a',
  //         {
  //             method: 'POST',
  //             body: formData,
  //         }
  //     )
  //         .then((response) => response.json())
  //         .then((result) => {
  //             //console.log('Success:', result);
  //             let datafromapi = result.map(data => {
  //                 arrays[value].push({
  //                     value: data.date,
  //                     label: data.date,
  //                     rating: data.date
  //                 })
  //             })
  //         })
  //         .catch((error) => {
  //             console.error('Error:', error);
  //         });
  // }

  // setTimeout(
  //     function () {
  //        // console.log(arrays.ndvidates[0].value)
  //     }
  //         .bind(this),
  //     2000
  // );
  // get date function *PS: put database name and array name used in select list
  // getdates('modis_ndvi', 'ndvidates')
  // getdates('soil_date', 'soil_moisture_dates')
  // getdates('et', 'et_dates')

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
          <LayerTree category="Administrator" />
          <LayerTree category="Land Use/Land Cover" />
          <LayerTree category="Census" />
        </div>
      </div>
      {/* *************Layer Tab end*************** */}

      {/* *************Vegetation Tab start*************** */}
      <div className={type === "Vegetation" ? "LayerContainer" : "hidden"}>
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
      {/* *************Vegetation Tab end*************** */}

      {/* *************Weather Tab start*************** */}
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
      {/* *************Weather Tab end*************** */}

      {/* *************Water Resources Tab start*************** */}
      <div className={type === "Water_Resources" ? "LayerContainer" : "hidden"}>
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
      {/* *************Water Resources Tab end*************** */}

      {/* *************Satellite Imagery Tab start*************** */}
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
      {/* *************Satellite Imagery Tab end*************** */}

      {/* *************Vedas Services Tab start*************** */}
      <div className={type === "Vedas_Services" ? "LayerContainer" : "hidden"}>
        <LayerTree category="Admin" state="test" />
        <LayerTree category="Natural Resource" />
      </div>
      {/* *************Vedas Services Tab start*************** */}
    </div>
  );
};

export default SideBarWrapper;
