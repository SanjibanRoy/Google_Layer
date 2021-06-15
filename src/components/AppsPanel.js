import React from "react";
import styled from "styled-components";
const AppsPanel = () => {
  return (
    <VEGANALYSIS>
      <div className="LayerTree">
        <p className="heads">District</p>
      </div>
      
      <div className="LayerTree">
        <p>RC Name</p>
      </div>
     
      <div className="LayerTree">
        <p className="heads">Status</p>
      </div>
      <select id="data" className="SelectMenu">
        <option key="1" value="modis_ndvi">
          High
        </option>
        <option key="2" value="et">
          Medium
        </option>
        <option key="3" value="soil_date">
          Low
        </option>
      </select>
    </VEGANALYSIS>
  );
};

export default AppsPanel;

const VEGANALYSIS = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  .heads {
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    border-bottom: black;
  }
  .SelectMenu {
    border: 1px solid #555;
    border-radius: 4px;
    box-shadow: none;
    font-size: 12px;
    font-weight: 400;
    /* width: 5000px; */
    display: block;
    width: 70%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 40px;
    margin-right: 10px;
  }
`;
