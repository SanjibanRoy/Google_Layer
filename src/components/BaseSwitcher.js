import React from "react";
import SatelliteIcon from "@material-ui/icons/Satellite";
import MapIcon from "@material-ui/icons/Map";
import { useDispatch } from "react-redux";
import { setBaseDetails } from "../features/layers/baselayerslice";
// import { useSelector } from "react-redux";
// import { selectBaseDataSet } from "../features/layers/baselayerslice";

function BaseSwitcher() {
  const dispatch = useDispatch();

  const ChangeMap = (e) => {
    dispatch(
      setBaseDetails({
        data: e,
        show:true
      })
    );
  };

  return (
    <div>
      <ul>
        <li key={2} onClick={() => ChangeMap(1)}>
          <MapIcon />
          <span> Cartodb</span>
        </li>
        <hr></hr>
        <li key={3} onClick={() => ChangeMap(2)}>
          <MapIcon />
          <span> Bhuvan</span>
        </li>
        <hr></hr>
        <li key={4} onClick={() => ChangeMap(3)}>
          <SatelliteIcon />
          <span> BhuvanSatellite</span>
        </li>
        <hr></hr>
        <li key={5} onClick={() => ChangeMap(4)}>
          <MapIcon />
          <span> Open Street</span>
        </li>
        <hr></hr>
        <li key={6} onClick={() => ChangeMap(5)}>
          <MapIcon />
          <span> Google Map</span>
        </li>
        <hr></hr>
        <li key={7} onClick={() => ChangeMap(6)}>
          <SatelliteIcon />
          <span> Google Satellite</span>
        </li>
        <hr></hr>
      </ul>
    </div>
  );
}

export default BaseSwitcher;
