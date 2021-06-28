import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBaseDetails } from "../features/layers/baselayerslice";
import { setAppDetails } from "../features/layers/appslice";
import Searchbox from "./Searchbox";
import NavigationBox from "./NavigationBox";
import ProximityTool from "./ProximityTool"
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
     setTools([tools.filter((e)=>e.name==id?e.show=true:e.show=false),...tools])
  };
//   console.log(tools.filter((e) => e.name === "Search"))
  return (
    <>
      <p className="heads">Applications</p>

      <VEGANALYSIS>
        <div className="apps" onClick={() => ChangeMap("Search")}>
          <p>Search</p>
        </div>

        <div className=" apps" onClick={() => ChangeMap("Navigation")}>
          <p>Navigate</p>
        </div>

        <div className=" apps" onClick={() => ChangeMap("Proximity")}>
          <p>Proximity</p>
        </div>


      </VEGANALYSIS>
      
      {tools.filter((e) => e.name === "Search")[0].show? <Searchbox />:""}
      {tools.filter((e) => e.name === "Navigation")[0].show ?<NavigationBox />:""}
      {tools.filter((e) => e.name === "Proximity")[0].show ?<ProximityTool />:""}

    </>
  );
};

export default AppsPanel;

const VEGANALYSIS = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20rem;
  background-color: palevioletred;
  border-radius: 0 0 15px 15px;
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
    -webkit-flex: 1 0 5%;
    -ms-flex: 1 0 5%;
    flex: 1 0 5%;
    /* padding: 10px; */
    margin: 5px;
    border-radius: 15px;
    background: #ffffff;
    border: 2px solid rgb(2 75 150);
    width: 0rem;
    height: 50px;
    padding: 14px 10px;
    cursor: pointer;
    /* border-bottom: 1px solid rgb(131,130,130); */
    font-size: 12px;
    color: #171616;
    font-family: "Poppins";
  }
  .apps:hover {
    background-color: #bdbdbd;
    border: black;
    color: #fff;
  }
`;
