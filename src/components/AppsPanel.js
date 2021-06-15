import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setBaseDetails } from "../features/layers/baselayerslice";
import { selectAppDataSet } from "../features/layers/appslice";
const AppsPanel = () => {

  const dispatch = useDispatch();
  // const basedata = useSelector(selectBaseDataSet);
  const ChangeMap = (e) => {
    dispatch(
      selectAppDataSet({
        data: e,
        show: true,
      })
    );
  };


  return (
    <VEGANALYSIS>
      <p className="heads">Applications</p>

      <div className="apps"  onClick={() => ChangeMap("geoportal")}>
        <p>Geo Portal</p>
      </div>

      <div className=" apps" onClick={() => ChangeMap("flood")}>
        <p>Flood</p>
      </div>

      <div className=" apps" onClick={() => ChangeMap("lightning")}>
        <p>Lightning/Thunderstrom</p>
      </div>

      <div className=" apps" onClick={() => ChangeMap("agriculture")}>
        <p>Agriculture</p>
      </div>

      <div className=" apps" onClick={() => ChangeMap("geosciences")}>
        <p>Geosciences</p>
      </div>
    </VEGANALYSIS>
  );
};

export default AppsPanel;

const VEGANALYSIS = styled.div`
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
    padding: 10px;
    margin: 10px;
    border-radius: 15px;
    background: #3a3a3a;
    border: 1px solid rgb(131, 130, 130);
    align-items: flex-end;
    width: 20rem;
    height: 50px;
    padding: 8px 10px;
    cursor: pointer;
    border-bottom: 1px solid rgb(131, 130, 130);
    font-size: 14px;
    color: #fff;
  }
  .apps:hover {
    background-color: #bdbdbd;
    border: black;
    color: #fff;
  }
`;
