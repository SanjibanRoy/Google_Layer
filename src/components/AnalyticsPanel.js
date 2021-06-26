import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AnalyticsVisualise from './AnalyticsVisualise'
import AnalyticsAnalysis from "./AnalyticsAnalysis";
const AnalyticsPanel = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Analytics>
     <Paper square>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="Visualise" />
                <Tab label="Analyse" />
              </Tabs>
            </Paper>
            <div className={value === 0 ? " " : "hidden"}>
              <AnalyticsVisualise/>
            </div>
            <div className={value === 1 ? " " : "hidden"}>
              <AnalyticsAnalysis/>
            </div>
    </Analytics>
  );
};

export default AnalyticsPanel;

const Analytics = styled.div`
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
