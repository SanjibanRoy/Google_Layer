import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBaseDetails } from "../features/layers/baselayerslice";
import { setAppDetails } from "../features/layers/appslice";
import Searchbox from "./Searchbox";
import NavigationBox from "./NavigationBox";
import ProximityTool from "./ProximityTool";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import MyLocationIcon from "@material-ui/icons/MyLocation";
const AppsPanel = () => {
  const dispatch = useDispatch();
  // const basedata = useSelector(selectBaseDataSet);
  const [tools, setTools] = useState([
    {
      name: "Search",
      show: true,
    },
    {
      name: "Navigation",
      show: false,
    },
    {
      name: "Proximity",
      show: false,
    },
    {
      name: "Measure",
      show: false,
    },
  ]);
  const ChangeMap = (id) => {
    //   tools.map((e)=>(e.name==id?{e.show=true:e.show=false),...tools})
    setTools([
      tools.filter((e) => (e.name == id ? (e.show = true) : (e.show = false))),
      ...tools,
    ]);
  };
  //   console.log(tools.filter((e) => e.name === "Search"))
  return (
    <Toolpanel>
      <p className="heads">Tools</p>

      <VEGANALYSIS>
        <div className="apps" onClick={() => ChangeMap("Search")}>
          <SearchIcon color="primary" />
        </div>

        <div className=" apps" onClick={() => ChangeMap("Navigation")}>
          <DirectionsIcon color="primary" />
        </div>

        <div className=" apps" onClick={() => ChangeMap("Proximity")}>
          <MyLocationIcon color="primary" />
        </div>
      </VEGANALYSIS>

      {tools.filter((e) => e.name === "Search")[0].show ? <Searchbox /> : ""}
      {tools.filter((e) => e.name === "Navigation")[0].show ? (
        <NavigationBox />
      ) : (
        ""
      )}
      {tools.filter((e) => e.name === "Proximity")[0].show ? (
        <ProximityTool />
      ) : (
        ""
      )}
    </Toolpanel>
  );
};

export default AppsPanel;

const VEGANALYSIS = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20rem;
  background-color: white;
  border-radius: 0 0 15px 15px;
  border-bottom: 2px solid black;
  .heads {
    background: #bdbdbd;
    align-items: flex-end;
    width: 100%;
    padding: 8px 10px;
    cursor: pointer;
    border-bottom: 1px solid rgb(131, 130, 130);
    font-size: 14px;
    color: #fff;
  }
  .apps {
    position:relative;
    top:10%;
    flex-basis:100%;
    flex: 1 0 5%;
    /* padding: 10px; */
    // margin: 5px;
    // border-radius: 15px;
    // background: #ffffff;
    // border: 2px solid rgb(2 75 150);
    width: 0rem;
    cursor: pointer;
    /* border-bottom: 1px solid rgb(131,130,130); */
    font-size: 12px;
    color: #171616;
    font-family: "Poppins";
    text-align: center;

  }
  .apps:hover {
    background-color: #bdbdbd;
    border: black;
    color: #fff;
  }
  .MuiSvgIcon-colorPrimary {
    color: #ffffff;
    border-radius: 5px;
    background: #004b96;
    padding: 5px;
    font-size: 40px;
  }
`;
const Toolpanel = styled.div`
.heads {
  background: #004b96bd;
  text-align: center;
  width: 100%;
  padding: 8px 10px;
  cursor: pointer;
  border-bottom: 1px solid rgb(131, 130, 130);
  font-size: 14px;
  color: #fff;
}
`;