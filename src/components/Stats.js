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
          var date = result.map((e) => e.date);
          var chartarea = result.map((e) => Number(e.area) / 10000);
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
            ar.push({
              district: e.district,
              area: e.area / 10000
            })
          })
          setDatatable({ dataa: [mydata], isFetching: false });
          setTest({
            columns: [
              {
                label: 'District',
                field: 'district',
                width: 270,
                attributes: {
                  'aria-controls': 'DataTable',
                  'aria-label': 'District',
                },
              },
              {
                label: 'Area (Hectare)',
                field: 'area',
                width: 150,
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
              <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={test} searchTop searchBottom={false}
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
    background: #014B96;
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
