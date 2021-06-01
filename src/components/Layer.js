import Checkbox from "@material-ui/core/Checkbox";
import InfoIcon from "@material-ui/icons/Info";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/overlaylayerslice";
import { useSelector } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import styled from "styled-components";

const Layer = ({ task, showLayer }) => {
  const dispatch = useDispatch();
  const state = useSelector(selectLayerDataSet);

  const toggleLayer = (id, e) => {
    dispatch(setAnalyticsDetails({ ...state, id: id - 1, show: e }));
  };

  const changeDate = (date, id) => {
    console.log("Here")
    dispatch(setAnalyticsDetails({ ...state, id: id - 1 , layer: date }));
  };

  return (
    <LAYER className={`${showLayer ? "active" : "task"}`}>
      <Checkbox
        color="primary"
        defaultChecked={task.show && true}
        onClick={(e) => toggleLayer(task.id, e.target.checked)}
      />
      {task.text} <InfoIcon className="info" />
      {task.options !== undefined && (
        <>
          {" "}
          <select
            id="date"
            onChange={(event) => {
              changeDate(event.target.value, task.id);
            }}
          >
            <option value="floodalert">RC Flood Alert</option>
            <option value="sixaugust">6 August 2020</option>
            <option value="oneaugust">1 August 2020</option>
            <option value="twentyfifthjuly">25 July 2020</option>
            <option value="twentytwojuly">22 July 2020</option>
            <option value="nineteenjuly">19 July 2020</option>
            <option value="seventeenjuly">17 July 2020</option>
            <option value="sixteenjuly">16 July 2020</option>
            <option value="fifteenjuly">15 July 2020</option>
            <option value="tenjuly">10 July 2020</option>
            <option value="eightjuly">8 July 2020</option>
            <option value="threejuly">3 July 2020</option>
            <option value="onejuly">1 July 2020</option>
            <option value="twentyeightjune">28 June 2020</option>
            <option value="twentysixjune">26 June 2020</option>
            <option value="twofourjune">24 June 2020</option>
            <option value="twoonejune">21 June 2020</option>
            <option value="twojune">2 June 2020</option>
            <option value="temay">28 May 2020</option>
          </select>
        </>
      )}
    </LAYER>
  );
};

export default Layer;

const LAYER = styled.div`
  font-size: 14px;
  .MuiSvgIcon-root {
    font-size: 16px;
    cursor: pointer;
  }
  .info {
    cursor: pointer;

    margin-top: 5px;
    display: block;
    margin-inline-end: 15px;
    float: right;
    color: rgb(73, 73, 245);
    font-size: small;
    margin-top: 10px;
  }
`;
