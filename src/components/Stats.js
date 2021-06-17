import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { selectInfo } from "../features/layers/infoboxslice";
import { useDispatch, useSelector } from "react-redux";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Stats = ({ info, state }) => {
  const [featureInfo, setFeatureInfo] = useState({
    data: [],
    isFetching: false,
  });
  const [options, setOptions] = useState([]);
  const [showLayer, setShowLayer] = useState(false);
  const infodata = useSelector(selectInfo);
  console.log(info)
  const getInfo = async (e) => {
    console.log(e.districtname)
    try {
      setFeatureInfo({ data: [], isFetching: true });
      fetch(
        "https://apps.nesdr.gov.in/api.php?district=" +
          e.districtname.toUpperCase(),
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          var date = result.map((e) => e.date);
          var chartarea = result.map((e) => Number(e.area)/10000);
          setFeatureInfo({ data: [result], isFetching: false });
          setOptions({
            chart: {
              backgroundColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 1,
                  y2: 1,
                },
                stops: [
                  [0, "#2a2a2b"],
                  [1, "#3e3e40"],
                ],
              },
              type: info.stats.charttype,
            },
            credits: {
              enabled: false,
            },
            title: {
              style: {
                color: "#E0E0E3",
                textTransform: "uppercase",
                fontSize: "20px",
              },
              text: "Area",
            },
            xAxis: {
              labels: {
                style: {
                  color: "#E0E0E3",
                },
              },
              categories: date,
            },
            yAxis: {
              crosshair: false,
              title: {
                color: "#E0E0E3",
                text: "Area",
              },
              labels: {
                style: {
                  color: "#E0E0E3",
                },
                formatter: function () {
                  return this.value;
                },
              },
            },
            tooltip: {
              formatter: function () {
                return (
                  "Total Area on <b>" + this.x + "</b> is <b>" + this.y + "</b>"
                );
              },
            },
            plotOptions: {
              spline: {
                marker: {
                  radius: 4,
                  lineColor: "#666666",
                  lineWidth: 1,
                },
              },
            },
            legend: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              itemStyle: {
                color: "#E0E0E3",
              },
              itemHoverStyle: {
                color: "#FFF",
              },
              itemHiddenStyle: {
                color: "#606063",
              },
              title: {
                style: {
                  color: "#C0C0C0",
                },
              },
            },
            series: [
              {
                // showInLegend: false,
                name: "Area",
                data: chartarea,
              },
            ],
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      setFeatureInfo({ ...featureInfo, isFetching: true });
    } catch (exception) {
      console.log(exception);
      //     setFeatureInfo({ featureInfo: featureInfo.data, isFetching: false });
    }
  };

  useEffect(() => {
    // AddAnalytics()
    getInfo(infodata);
  }, [infodata]);
  return (
    <INFO>
      {featureInfo.isFetching ? (
        <CircularProgress />
      ) : (
        featureInfo.data.length > 0 && (
          <React.Fragment>
            <p onClick={() => setShowLayer(!showLayer)}>{info.text}</p>
            <HighchartsReact highcharts={Highcharts} options={options} />

            {/* <p>{info.text}</p> */}
          </React.Fragment>
        )
      )}
    </INFO>
  );
};

export default Stats;

export const INFO = styled.div`
  /* width: 10%; */
  color: white;
  /* table-layout: fixed; */

  p {
    background: #171e26;
    align-items: center;
    width: 20rem;
    padding: 8px 10px;
    border-bottom: 1px solid #ccc;
  }
  p > .MuiSvgIcon-root {
    float: right;
    color: gray;
  }
  .visibility {
    display: none;
  }
  table {
    margin-left: 5%;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 5%;
    /* max-width: 20%; */
    table-layout: fixed;
    width: 90%;

    /* border: none; */
    border-collapse: collapse;
    border: 1px solid #dadada;

    background-color: #222222;
  }
  table tr {
    margin-bottom: 1px;
    border-bottom: 0.5px solid #dadada;
    word-break: break-all;
  }
`;
