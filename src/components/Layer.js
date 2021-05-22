import Checkbox from '@material-ui/core/Checkbox';
import InfoIcon from '@material-ui/icons/Info';
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/overlaylayerslice";
import { useSelector } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";
import styled from "styled-components";

const Layer = ({ task, showLayer }) => {
  const dispatch = useDispatch();
  const state = useSelector(selectLayerDataSet);

  const toggleLayer = (id,e) => {
    dispatch(
      setAnalyticsDetails({...state,
        id:id-1,
        show: e,
      })
    );
  };

  return (
      <LAYER
        className={ `${showLayer? 'active':'task'}`} 
      >
      
        <Checkbox color="primary"  defaultChecked={task.show&&"checked"}
          onClick={(e) => toggleLayer(task.id,e.target.checked)}
        />
        {task.text}{' '}
        <InfoIcon className="info"/>
        
       
    </LAYER>
  )
}

export default Layer

const LAYER =  styled.div`
    font-size: 14px;
.MuiSvgIcon-root{
  font-size: 16px;
  cursor: pointer;

}
.info{
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