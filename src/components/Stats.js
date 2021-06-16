import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Stats = ({ info, state }) => {
  const [featureInfo, setFeatureInfo] = useState({
    data: [],
    isFetching: false,
  });
  const [options, setOptions] = useState([])
  const [showLayer, setShowLayer] = useState(false)

  const getInfo = async () => {
    try {
      setFeatureInfo({ data: [], isFetching: true });

      // console.log(formData);
      fetch(
        'https://apps.nesdr.gov.in/api.php',
        // 'https://bhuvan-app1.nrsc.gov.in/api/lulc/curljson.php?year=1112&statcode=AN&token=fcf34bdc33825b99a5eab3d56ec8b7619c4d75f1&distcode=2301',
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          let stringarray = (result.map((e=>e.area)))
          stringarray.map((e=>parseInt(stringarray)))
          console.log(...(result.map((e=>e.area))))
          setFeatureInfo({ data: [...result], isFetching: false });
          setOptions({
            chart: {
              type: info.stats.charttype
            },
            title: {
              text: 'My chart'
            },
            series: [
              {

                data: result.map((e=>e.area))
              }
            ]
          })
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

  // const options = {
  //   chart: {
  //     type: info.stats.charttype
  //   },
  //   title: {
  //     text: 'My chart'
  //   },
  //   series: [
  //     {
  //       data: [1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6]
  //     }
  //   ]
  // };
  useEffect(() => {
    // AddAnalytics()
    getInfo();
  }, [state]);
  return (
    console.log(info),
    (
      <INFO>
        {featureInfo.isFetching ? (
          <CircularProgress />
        ) : (
          featureInfo.data.length > 0 && (
            <React.Fragment>
              <p onClick={() => setShowLayer(!showLayer)}>
                {info.text}
                
              </p>
              <HighchartsReact highcharts={Highcharts} options={options} />

              {/* <p>{info.text}</p> */}

            </React.Fragment>
          )
        )}
      </INFO>
    )
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
  p>.MuiSvgIcon-root{
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
