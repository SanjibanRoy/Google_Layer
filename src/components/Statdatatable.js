import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { selectInfo } from "../features/layers/infoboxslice";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTableV5 } from 'mdbreact';
import { MDBDataTable, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Cbutton from "./collapsebutton";
import { ContactsOutlined } from "@material-ui/icons";
const Statsdatatable = ({ info, state }) => {
const [datatable, setDatatable] = useState({
    dataa: [],
    isFetching: false,
  });
  const [options, setOptions] = useState([]);
  const [showLayer, setShowLayer] = useState(false);
  const infodata = useSelector(selectInfo);
  const layerdata = useSelector(selectLayerDataSet);
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
      if (info.stats.val == "flood") {
        var urlapi = "https://api.nesdr.gov.in/nerdrr/flood.php?date=" + finallyphew
      }
      console.log(urlapi)
      if (info.stats.val == "firev") {
        var urlapi = info.stats.apitable
      }
      fetch(urlapi, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((mydata) => {
          if (info.stats.val == "flood") {
            mydata.map((e) => {
              var sko = e.district.toLowerCase();
              ar.push({
                district: sko.charAt(0).toUpperCase() + sko.slice(1),
                area: (e.area / 10000).toFixed(2)
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
          }
          if (info.stats.val == "firev") {
            console.log(mydata)
            mydata.map((e) => {
              ar.push({
                district: e.dtname,
                area1: (e.area1 / 10000).toFixed(2),
                area2: (e.area2 / 10000).toFixed(2),
                area3: (e.area3 / 10000).toFixed(2),
                area4: (e.area4 / 10000).toFixed(2),
                area5: (e.area5 / 10000).toFixed(2)
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
                  label: 'Area1 (Hectare)',
                  field: 'area1',
                },
                {
                  label: 'Area2 (Hectare)',
                  field: 'area2',
                },
                {
                  label: 'Area3 (Hectare)',
                  field: 'area3',
                },
                {
                  label: 'Area4 (Hectare)',
                  field: 'area4',
                },
                {
                  label: 'Area5 (Hectare)',
                  field: 'area5',
                },
              ],
              rows: ar,
            })
          }
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
  return (
    <>
      <INFO>
        {datatable.isFetching ? (
          ""
        ) : (
          datatable.dataa.length > 0 && (
            <React.Fragment>
              <p>Data Table</p>
              <br></br>
              <MDBDataTableV5 scrollY maxHeight="300px" hover entriesOptions={[8, 20, 25, 100]} entries={8} pagesAmount={4} data={test} searchTop searchBottom={false}
              />
            </React.Fragment>
          )
        )}
      </INFO>
    </>
  );
};

export default Statsdatatable;

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
