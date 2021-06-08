import Checkbox from "@material-ui/core/Checkbox";
import InfoIcon from "@material-ui/icons/Info";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails, selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { useSelector } from "react-redux";
import { setInfoDetails } from "../features/layers/infoboxslice";
import styled from "styled-components";

const Layer = ({ task, showLayer }) => {
  const dispatch = useDispatch();
  const state = useSelector(selectLayerDataSet);

  const toggleLayer = (id, e) => {
    dispatch(setAnalyticsDetails({ ...state, id: id - 1, show: e }));
  };
  const showInfo = (data,info) => {
    dispatch(setInfoDetails({ dataset: data, info:info, show: true }));

  };
  const changeDate = (date, id) => {
    console.log("Here");
    dispatch(setAnalyticsDetails({ ...state, id: id - 1, show: false }));
    setTimeout(console.log(""), 10000);

    dispatch(
      setAnalyticsDetails({ ...state, id: id - 1, show: true, layer: date })
    );
  };

  return (
    <LAYER className={`${showLayer ? "active" : "task"}`}>
      <Checkbox
        color="primary"
        defaultChecked={task.show && true}
        onClick={(e) => toggleLayer(task.id, e.target.checked)}
      />
      {task.text}{" "}
      <InfoIcon className="info" onClick={(e) => showInfo(task.text, task.info)} />
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
            <option value="FLEWS:8july2020">6 August 2020</option>
            <option value="oneaugust">1 August 2020</option>
            <option value="twentyfifthjuly">25 July 2020</option>
            <option value="twentytwojuly">22 July 2020</option>
            <option value="FLEWS:19_july">19 July 2020</option>
            <option value="FLEWS:17July">17 July 2020</option>
            <option value="FLEWS:16_july">16 July 2020</option>
            <option value="FLEWS:15july2020">15 July 2020</option>
            <option value="FLEWS:10july2020">10 July 2020</option>
            <option value="FLEWS:8july2020">8 July 2020</option>
            <option value="FLEWS:3july2020">3 July 2020</option>
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
