import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { selectInfo } from "../features/layers/infoboxslice";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTableV5 } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Cbutton from "./collapsebutton";
const Stats = ({ info, state }) => {
  const [featureInfo, setFeatureInfo] = useState({
    data: [],
    isFetching: false,
  });
  const [options, setOptions] = useState([]);
  const [showLayer, setShowLayer] = useState(false);
  const infodata = useSelector(selectInfo);
  const layerdata = useSelector(selectLayerDataSet);
  // var dateapi=layerdata[11].layer_date;
  // console.log(dateapi)
  const getInfo = async (e) => {
    try {
      setFeatureInfo({ data: [], isFetching: true });
      fetch(
        info.stats.api + '' + (e.districtname !== undefined ? e.districtname.toUpperCase() : ""), {

        method: "GET",
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          var date = result.map((e) => e.date);
          var chartarea = result.map((e) => Number(e.area) / 10000);
          setFeatureInfo({ data: [result], isFetching: false });
          setOptions({
            chart: {
              width:300,
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
                text: "Date",
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
                text: "Area",
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
                  "Total Area on <b>" + this.x + "</b> is <b>" + this.y + "</b>"
                );
              },
            },
            plotOptions: {
              spline: {
                marker: {
                  radius: 4,
                  // lineColor: "#666666",
                  lineWidth: 1,
                },
              },
            },
            // legend: {
            //   backgroundColor: "white",
            //   itemStyle: {
            //     color: "black",
            //   },
            //   itemHoverStyle: {
            //     color: "black",
            //   },
            //   itemHiddenStyle: {
            //     color: "#606063",
            //   },
            //   title: {
            //     style: {
            //        color: "#C0C0C0",
            //     },
            //   },
            // },
            series: [
              {
                showInLegend: false,
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
  const [datatable, setDatatable] = useState({
    dataa: [],
    isFetching: false,
  });
  var dateapi
  const [test, setTest] = useState([]);
  useEffect(() => {
    dateapi = layerdata[11].layer_date;
    tabledata(dateapi)
  }, [layerdata]);
  const tabledata = async (e) => {
    var hayeram = String(e);
    var str;
    if (hayeram === "") {
      str = "1 August 2020";
    } else
      if (hayeram == "undefined") {
        str = "1 August 2020";
      } else {
        str = hayeram;
      }
    var res = str.split(" ");
    var month = String(res[1])
    var year = String(res[2])
    var finaldate;
    if (res[0].length == 1) {
      let str1 = '0';
      let str2 = String(res[0]);
      finaldate = str1.concat(str2)
    } else {
      finaldate = res[0];
    }
    var finallyphew = finaldate + '-' + month.substring(0, 3) + '-' + year.substring(0, 2);
    try {
      var ar = []
      setDatatable({ dataa: [], isFetching: true });
      fetch("https://api.nesdr.gov.in/nerdrr/flood.php?date=" + finallyphew, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((mydata) => {
          mydata.map((e) => {
            var sko=e.district.toLowerCase();
            ar.push({
              district:sko.charAt(0).toUpperCase() + sko.slice(1),
              area: e.area / 10000
            })
          })
          setDatatable({ dataa: [mydata], isFetching: false });
          setTest({
            columns: [
              {
                label: 'District',
                field: 'district',
                attributes: {
                  'aria-controls': 'DataTable',
                  'aria-label': 'District',
                },
              },
              {
                label: 'Area (Hectare)',
                field: 'area',
              },
            ],
            rows: ar,
          })
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      setDatatable({ ...datatable, isFetching: true });
    }
    catch (exception) {
      console.log(exception);
    }
  };
  useEffect(() => {
    tabledata();
  }, []);
  useEffect(() => {
    getInfo(infodata);
  }, [infodata]);
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
        {datatable.isFetching ? (
          <CircularProgress />
        ) : (
          datatable.dataa.length > 0 && (
            <React.Fragment>
              <p>Data Table</p>
              <br></br>
              <MDBDataTableV5 scrollY maxHeight="300px" hover entriesOptions={[8, 20, 25,100]} entries={8} pagesAmount={4} data={test} searchTop searchBottom={false}
              />
            </React.Fragment>
          )
        )}
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
