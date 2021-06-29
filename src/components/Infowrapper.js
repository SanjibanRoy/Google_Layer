import React from "react";
import LayerInfo from "./LayerInfo";
import StatsBox from "./StatsBox";
import FocusBox from "./FocusBox";
import styled from "styled-components";
import InfoBox from "./InfoBox";
import Cbutton from "./collapsebutton";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfoDetails } from "../features/layers/infoboxslice";
import CircularProgress from "@material-ui/core/CircularProgress";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { selectMapstate } from "../features/maps/mapStateSlice";

const Infowrapper = () => {
  const [featureInfo, setFeatureInfo] = useState({
    data: [],
    isFetching: false,
  });
  const dispatch = useDispatch();
  const state = useSelector(selectMapstate);
  let info = state.overlays.filter((layers) => layers.class !== "Lightning")[0];

  const overlayLayers = useSelector(selectLayerDataSet);
  const activelayers = overlayLayers.filter((e) => e.show).map((e) => e.text);
  if (
    activelayers.includes("State Boundary") &
    activelayers.includes("District Boundary")
  ) {
     info = state.overlays.filter((layers) => layers.class !== "Lightning")[1];

  }else{
     info = state.overlays.filter((layers) => layers.class !== "Lightning")[0];

  }
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
          Math.round(state.point.x) +
          "&Y=" +
          Math.round(state.point.y) +
          "&WIDTH=" +
          Math.round(state.shape.x) +
          "&HEIGHT=" +
          Math.round(state.shape.y) +
          "&BBOX=" +
          state.bounds,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          // console.log(result);
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
            result.features.length > 0 &&
              dispatch(
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
    // console.log(state);
    // console.log(info);
    // AddAnalytics()
    getInfo();
  }, [state, info]);
  return (
    <Wrapper>
      {<Cbutton />}
    </Wrapper>
  );
};
export default Infowrapper;
const Wrapper = styled.div`
  color: white;
  top: 0px;
  right: 0px;
  position: absolute;
  z-index: 100000;
`;
