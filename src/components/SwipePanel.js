import React from "react";
import {useEffect} from "react"
import { useSelector,useDispatch } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {selectSwipeDataSet,setSwipeLayers} from "../features/layers/swipemapslice"
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
    <div className="LayerTree">

      <select
        onChange={(event) => {
          changeLeft(event.target.value);
        }}
      >
        {overlayLayers.map(
          (data, index) =>
            data.show && <option value={data.id}> {data.text}</option>
        )}
      </select>

      <select
        onChange={(event) => {
          changeRight(event.target.value);
        }}
      >
        {overlayLayers.map(
          (data, index) =>
            data.show && <option value={data.id}> {data.text}</option>
        )}
      </select>
    </div>
  );
};

export default SwipePanel;
