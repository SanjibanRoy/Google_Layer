import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfoDetails } from "../features/layers/infoboxslice";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const Info = ({ info, state }) => {
  const [featureInfo, setFeatureInfo] = useState({
    data: [],
    isFetching: false,
  });
  const [showLayer, setShowLayer] = useState(true);
  const dispatch = useDispatch();

  const overlayLayers = useSelector(selectLayerDataSet);
  const activelayers = overlayLayers.filter((e) => e.show).map((e) => e.text);
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
          if (
            activelayers.includes("State Boundary") &
            activelayers.includes("District Boundary")
          ) {
            result.features[0].properties.dtname !== undefined &&
              dispatch(
                setInfoDetails({
                  statename: result.features[0].properties.stname,
                  distname: result.features[0].properties.dtname,
                })
              );
          } else {
            result.features.length>0&&dispatch(
              // result.features[0].properties.dtname !== undefined &&
              setInfoDetails({
                statename: result.features[0].properties.stname,
                // distname: result.features[0].properties.dtname,
              })
            );
          }
          // );
          // result.features[0].properties.dtname !== undefined;

          setFeatureInfo({ data: result.features, isFetching: false });
        })
        .catch((error) => {
          console.error("Error:", error);
          setFeatureInfo({ ...featureInfo, isFetching: false });

        });
      setFeatureInfo({ ...featureInfo, isFetching: true });
    } catch (exception) {
      console.log(exception);
    }
  };

  useEffect(() => {
    // AddAnalytics()
    getInfo();
  }, [state]);
  return (
    (
      <INFO>
        {featureInfo.isFetching ? (
          <CircularProgress />
        ) : (
          featureInfo.data.length > 0 && (
            <React.Fragment ><div className="InfoBox">         
                <p onClick={() => setShowLayer(!showLayer)}>
                {showLayer ? (
                    <RemoveIcon />
                  ) : (
                    <AddIcon />
                  )}
                  {info.text}
                </p>
                {/* <p>{info.text}</p> */}
                <table className={`${showLayer ? "showtable" : "visibility"}`}>
                  <thead >
                    <tr >
                      <td style={{backgroundColor:"orange", fontWeight:"bold"}}>Attribute</td>
                      <td style={{backgroundColor:"orange", fontWeight:"bold"}}>Value</td>
                    </tr>
                  </thead>
                  <tbody >
                    {featureInfo.data[0] !== undefined && info.attributes
                      ? info.attributes.map((attribute) =>
                          Object.keys(featureInfo.data[0].properties)
                            .filter((e) => e === attribute.value)
                            .map(function (element, index) {
                              return (
                                <tr key={index}>
                                  <td >{attribute.text}</td>
                                  <td >
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
            </div>
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
  /* table-layout: fixed; */
  .Infobox{
    
    /* border-radius: 10px; */

  }
  p {
    background: #294da1;
    align-items: center;
    width: 100%;
    padding: 8px 10px;
    border-bottom: 1px solid #ccc; 
  }
  p > .MuiSvgIcon-root {
    float: left;
    color: gray;
  }
  .visibility {
    display: none;
  }
  table {
    /* margin-left: 1%; */
    margin-top: 2%;
    margin-bottom: 2%;
    /* margin-right: 18%; */
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
  .showtable{
    height:20%;
  }
  table td {
    padding: 6px !important;
    text-align: center !important;
    background-color:white;
    color:black !important;
    font-weight: 400;
}
`;
