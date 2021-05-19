import Checkbox from '@material-ui/core/Checkbox';
import InfoIcon from '@material-ui/icons/Info';
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/overlaylayerslice";
import { useSelector } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";

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
      <div
        className={ `${showLayer? 'active':'task'}`} 
      >
      
        <Checkbox color="primary"
          onClick={(e) => toggleLayer(task.id,e.target.checked)}
        />
        {task.text}{' '}
        <InfoIcon />
        
       
    </div>
  )
}

export default Layer
