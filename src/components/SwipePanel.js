import React from "react";
import {useEffect} from "react"
import { useSelector,useDispatch } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {selectSwipeDataSet,setSwipeLayers} from "../features/layers/swipemapslice"
import styled from "styled-components";
const SwipePanel = () => {
  const dispatch = useDispatch();

  const overlayLayers = useSelector(selectLayerDataSet);
  const swipestate = useSelector(selectSwipeDataSet);

  const changeRight = (right) => {
    dispatch(setSwipeLayers({
      ...swipestate,
      rightmap:right
    }));
    console.log(right);
  };
  const changeLeft = (left) => {
    dispatch(setSwipeLayers({
      ...swipestate,
      leftmap:left
    }));
    console.log(left);
  };

  useEffect(() => {
    dispatch(setSwipeLayers({
      rightmap:"",
      leftmap:""
    }));
  }, [])
  return (
    <Swipe >

      <select id="left"
        onChange={(event) => {
          changeRight(event.target.value);
        }}
      >
        {overlayLayers.map(
          (data, index) =>
            data.show && <option key={index} value={data.id}> {data.text}</option>
        )}
      </select>

      <select id="right"
        onChange={(event) => {
          changeLeft(event.target.value);
        }}
      >
        {overlayLayers.map(
          (data, index) =>
            data.show && <option key={index} value={data.id}> {data.text}</option>
        )}
      </select>
    </Swipe>
  );
};

export default SwipePanel;

const Swipe = styled.div`
  z-index: 100000000;
  width: 20%;
  display:flex;
  top:0;
  position: absolute;
  z-index: 10000;
  align-items: center;
  left:40%;
  padding-right: 0%;
  padding-left: 0%;
  margin-top: 4px; 
#left{
  border-color:#014B96;
  /* position:absolute; */
  /* left:30%;
  top:0; */
  border-style: solid;
  border-width: 2px 2px 2px 2px;
}

#right{
  /* position:absolute;
  left:60%;*/
  margin-left: 50%;
  border-color:#014B96;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
}

`