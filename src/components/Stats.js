import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { selectInfo } from "../features/layers/infoboxslice";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { useDispatch, useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Cbutton from "./collapsebutton";
import { ContactsOutlined } from "@material-ui/icons";
import Statsdatatable from "./Statdatatable";
const Stats = ({ info, state }) => {
  const [featureInfo, setFeatureInfo] = useState({
    data: [],
    isFetching: false,
  });
  const [options, setOptions] = useState([]);
  const [showLayer, setShowLayer] = useState(false);
  const infodata = useSelector(selectInfo);
  const layerdata = useSelector(selectLayerDataSet);
  // var dateapi=layerdata[25].layer_date;
  // console.log(dateapi)
  var dateapi;
  useEffect(() => {
    dateapi = layerdata[25].layer_date;
    getInfo(dateapi)
  }, [layerdata]);
  const getInfo = async (e) => {
    var cropdamsyear=e;
    try {
      setFeatureInfo({ data: [], isFetching: true });
      console.log(info.stats.val)
      if (info.stats.val == "flood") {
        var urlapi = info.stats.api + '' + (e.districtname !== undefined ? e.districtname.toUpperCase() : "")
      }else
      if (info.stats.val == "firev") {
        var urlapi = info.stats.api + '' + (e.districtname !== undefined ? e.districtname : "")
      }else
      if (info.stats.val == "cropyear") {
        if(cropdamsyear=='2005-2011'){
          var urlapi=info.options[0].api+ '' + (e.districtname !== undefined ? e.districtname.toLowerCase() : "")
        }else if(cropdamsyear=='2005-2015'){
          var urlapi=info.options[1].api+ '' + (e.districtname !== undefined ? e.districtname.toLowerCase() : "")
        }else if(cropdamsyear=='2011-2015'){
          var urlapi=info.options[2].api+ '' + (e.districtname !== undefined ? e.districtname.toLowerCase() : "")
        }else{
          var urlapi=info.options[0].api+ '' + (e.districtname !== undefined ? e.districtname.toLowerCase() : "")
        }
      }
      console.log(urlapi)
      fetch(
        urlapi, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((result) => {
         // console.log(result)
          if (info.stats.val == "flood") {
            var date = result.map((e) => e.date);
            var chartarea = result.map((e) => Number(e.area) / 1000000);
          }
          if (info.stats.val == "firev") {
            var a1 = result.map((e) => Number(e.area1) / 1000000);
            var a2 = result.map((e) => Number(e.area2) / 1000000);
            var a3 = result.map((e) => Number(e.area3) / 1000000);
            var a4 = result.map((e) => Number(e.area4) / 1000000);
            var a5 = result.map((e) => Number(e.area5) / 1000000);
            var chartarea = [{
              name: 'Very Low',
              y: a1[0],
              sliced: true,
              selected: true
            }, {
              name: 'Low',
              y: a2[0],
            }, {
              name: 'Moderate',
              y: a3[0],
            }, {
              name: 'High',
              y: a4[0],
            }, {
              name: 'Very High',
              y: a5[0],
            }]
            var date = "";
          }
          if (info.stats.val == "cropyear") {
            var date = result.map((e) => e.district);
            var chartarea = result.map((e) => Number(e.area) / 1000000);
          }
          setFeatureInfo({ data: [result], isFetching: false });
          setOptions({
            chart: {
              width: 300,
              backgroundColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 1,
                  y2: 1,
                },
                stops: [
                  [0, "white"],
                  [1, "white"],
                ],
              },
              type: info.stats.charttype,
            },
            credits: {
              enabled: false,
            },

            xAxis: {
              title: {
                // color: "#E0E0E3",
                text: "",
              },
              labels: {
                style: {
                  //   color: "#E0E0E3",
                },
              },
              categories: date,
            },
            yAxis: {
              crosshair: false,
              title: {
                // color: "#E0E0E3",
                text: "Area (sq. km)",
              },
              labels: {
                style: {
                  // color: "#E0E0E3",
                },
                formatter: function () {
                  return this.value;
                },
              },
            },
            tooltip: {
              formatter: function () {
                return (
                  "Total Area is <b>" + this.y + "</b>"
                );
              },
            },
            plotOptions: {
              pie: {
                colors: [
                  'green', 
                  'rgb(100, 229, 114)', 
                  '#DDDF00', 
                  'orange', 
                  'red'
                ],
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                  enabled: false,
                }
              },
              spline: {
                marker: {
                  radius: 4,
                  // lineColor: "#666666",
                  lineWidth: 1,
                },
              },
            },
            legend: {
              backgroundColor: "white",
              itemStyle: {
                color: "black",
              },
              itemHoverStyle: {
                color: "black",
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
                showInLegend: true,
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
      // console.log(exception);
      //     setFeatureInfo({ featureInfo: featureInfo.data, isFetching: false });
    }
  };
  useEffect(() => {
    getInfo(infodata);
    //console.log(infodata)
  }, [infodata, info]);
  return (
    <>
      <INFO>
        {featureInfo.isFetching ? (
          <CircularProgress />
        ) : (
          featureInfo.data.length > 0 && (
            <React.Fragment>
              <p onClick={() => setShowLayer(!showLayer)}>{info.text}</p>
              <HighchartsReact highcharts={Highcharts} options={options} />
              {/* <Test/> */}
            </React.Fragment>
          )
        )}
        <Statsdatatable/>
      </INFO>
    </>
  );
};

export default Stats;

export const INFO = styled.div`
  /* width: 10%; */
  color: white;
  /* table-layout: fixed; */
  p {
    background: white;
    align-items: center;
    width: 100%;
    padding: 8px 10px;
    border-bottom: 1px solid #ccc;
    color:black;
  }
  p > .MuiSvgIcon-root {
    float: right;
    color: gray;
  }
  .visibility {
    display: none;
  }
  table {
    margin-left: 0%;
    margin-top: 2%;
    margin-bottom: 2%;
    /* max-width: 20%; */
    table-layout: fixed;
    width: 100%;
    /* border: none; */
    border-collapse: collapse;
    border: 1px solid #dadada;
    background-color: #222222;
  }
  table tr {
    margin-bottom: 1px;
    border-bottom: 0.5px solid #dadada;
    word-break: break-all;
    width:80%;
  }
  table td {
    padding: 6px !important;
    text-align: center !important;
    background-color:white;
    color:black !important;
    font-weight: 400;
}
table th {
  padding: 6px !important;
  text-align: center !important;
  background-color:orange !important;
  font-weight:bold !important;
  color:black !important;
  font-weight:"bold";
}
div.mdb-datatable div.mdb-datatable-info {
  display: none !important;
}
div.mdb-datatable div.mdb-datatable-info, div.mdb-datatable div.mdb-dataTables_paginate, div.mdb-datatable div.mdb-datatable-entries {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}
.pagination .page-item .page-link {
  text-align:center !important;
}
`;
