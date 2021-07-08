import Checkbox from "@material-ui/core/Checkbox";
import InfoIcon from "@material-ui/icons/Info";
import { useDispatch } from "react-redux";
import {
  setAnalyticsDetails,
  selectLayerDataSet,
} from "../features/layers/overlaylayerslice";
import { useSelector } from "react-redux";
import { setLayerInfoDetails } from "../features/layers/layerinfoslice";
import styled from "styled-components";
import TimeSlider from "./TimeSlider";
// function getdrop() {
//   var vall = document.getElementById("date");
//   var value=vall.options[vall.selectedIndex].value;
//   var text=vall.options[vall.selectedIndex].text;
// }
const Layer = ({ task, showLayer }) => {
  const dispatch = useDispatch();
  const state = useSelector(selectLayerDataSet);

  const toggleLayer = (id, e) => {
    dispatch(setAnalyticsDetails({ ...state, id: id - 1, show: e }));
  };
  const showInfo = (data, info) => {
    dispatch(setLayerInfoDetails({ dataset: data, info: info, show: true }));
  };
  const changeDate = (date, id) => {
    var vall = document.getElementById("date");
    var text = vall.options[vall.selectedIndex].text;
    console.log(text);
    dispatch(setAnalyticsDetails({ ...state, id: id - 1, show: false }));
    setTimeout(console.log(""), 10000);

    dispatch(
      setAnalyticsDetails({
        ...state,
        id: id - 1,
        show: true,
        layer: date,
        layer_date: text,
      })
    );
  };
  // console.log(task.options)
  let dropdown;
  if (task.show) {
    
    if (task.options !== undefined) {
      dropdown = (
        <>
          <select
            id="date"
            // onClick={getdrop}
            onChange={(event) => {
              changeDate(event.target.value, task.id);
            }}
          >
            {task.options.map((data) => (
              <option value={data.value}> {data.text}</option>
            ))}
          </select>

          {task.subclass==="WRF"&&<TimeSlider data = {task.options}/>}        </>
      );
    }
    if (task.options !== undefined&task.submenu !== undefined) {
      console.log("In submenus ")
      dropdown = (
        <div>
          <select
            id="date"
            // onClick={getdrop}
            onChange={(event) => {
              changeDate(event.target.value, task.id);
            }}
          >
            {task.options.map((data) => (
              <option value={data.value}> {data.text}</option>
            ))}
          </select>

          <select
            id="date"
            // onClick={getdrop}
            onChange={(event) => {
              changeDate(event.target.value, task.id);
            }}
          >
            {task.submenu.map((data) => (
              <option value={data.value}> {data.text}</option>
            ))}
          </select>
          <TimeSlider/>
        </div>
      );
    }
  }

  return (
    <LAYER className={`${showLayer ? "active" : "task"}`}>
      <Checkbox
        color="primary"
        defaultChecked={task.show && true}
        onClick={(e) => toggleLayer(task.id, e.target.checked)}
      />
      {task.text}{" "}
      <InfoIcon
        className="info"
        onClick={(e) => showInfo(task.text, task.info)}
      />
      {dropdown}
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
