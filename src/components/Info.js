import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Info = ({ info, state }) => {
  const [featureInfo, setFeatureInfo] = useState({
    data: [],
    isFetching: false,
  });
  console.log(info);
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
    <INFO>
      {featureInfo.isFetching ? (
        <CircularProgress />
      ) : (
        <table border={2} cellPadding={5}>
          <thead>
            <tr>
              <td>Key</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            {featureInfo.data[0] !== undefined &&
              Object.keys(featureInfo.data[0].properties).map(function (
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
      )}
    </INFO>
  );
};

export default Info;

export const INFO = styled.div`
  width: 10%;
`;
