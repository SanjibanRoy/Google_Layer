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
          changeLeft(event.target.value);
        }}
      >
        {overlayLayers.map(
          (data, index) =>
            data.show && <option value={data.id}> {data.text}</option>
        )}
      </select>

      <select id="right"
        onChange={(event) => {
          changeRight(event.target.value);
        }}
      >
        {overlayLayers.map(
          (data, index) =>
            data.show && <option value={data.id}> {data.text}</option>
        )}
      </select>
    </Swipe>
  );
};

export default SwipePanel;

const Swipe = styled.div`
  z-index: 100000000;
  width: 25%;
  display:flex;
  top:0;
  position: absolute;
  background-color: #fff;
  z-index: 10000;
  align-items: center;
  left:30%;
  padding-right: 10%;
#left{
  /* position:absolute; */
  /* left:30%;
  top:0; */
}

#right{
  /* position:absolute;
  left:60%;
  top:0; */
  margin-left: 50%;

}

`