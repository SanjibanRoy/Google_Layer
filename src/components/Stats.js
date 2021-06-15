import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Info = ({ info, state }) => {
  const [featureInfo, setFeatureInfo] = useState({
    data: [],
    isFetching: false,
  });
  const [showLayer, setShowLayer] = useState(false)

  const getInfo = async () => {
    try {
      setFeatureInfo({ data: [], isFetching: true });

      // console.log(formData);
      fetch(
        info.link +
          "?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&QUERY_LAYERS=" +
          info.layer +
          "&LAYERS=" +
          info.layer +
          "&INFO_FORMAT=application/json&FEATURE_COUNT=50&X=" +
          state.point.x +
          "&Y=" +
          state.point.y +
          "&WIDTH=" +
          state.shape.x +
          "&HEIGHT=" +
          state.shape.y +
          "&BBOX=" +
          state.bounds,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          setFeatureInfo({ data: result.features, isFetching: false });
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
                {showLayer ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </p>

              {/* <p>{info.text}</p> */}
              <table className={`${showLayer ? "" : "visibility"}`}>
                <thead>
                  <tr>
                    <td>Attribute</td>
                    <td>Value</td>
                  </tr>
                </thead>
                <tbody>
                  {featureInfo.data[0] !== undefined &&
                  info.attributes 
                    ? info.attributes.map((attribute) =>
                        Object.keys(featureInfo.data[0].properties)
                          .filter((e) => e === attribute.value)
                          .map(function (element, index) {
                            return (
                              <tr key={index}>
                                <td>{attribute.text}</td>
                                <td>
                                  {featureInfo.data[0].properties[element]}
                                </td>
                              </tr>
                            );
                          })
                      )
                    : Object.keys(featureInfo.data[0].properties).map(function (
                        element,
                        index
                      ) {
                        return (
                          <tr key={index}>
                            <td>{element}</td>
                            <td>{featureInfo.data[0].properties[element]}</td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </React.Fragment>
          )
        )}
      </INFO>
    )
  );
};

export default Info;

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
