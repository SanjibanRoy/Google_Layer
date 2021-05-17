import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/layervisualiseslice";
import { useSelector } from "react-redux";
import { selectLayerDataSet } from "../features/layers/layervisualiseslice";

const LayerAnalyticsVisualise = ({showLayer }) => {
  var arrays = [{
    ndvidates: [200,300],
    soil_moisture_dates: [200,300],
    et_dates: [200,300]
}];
const dispatch = useDispatch();
const state = useSelector(selectLayerDataSet);

const setDate = (date,data) => {
  dispatch(
    setAnalyticsDetails({dataset:data.showLayer,
      dates: date,
    })
  );
};
return (
      <div
        className={ `${showLayer? 'activeAnalytics':'task'}`} 
      >
         {showLayer} Date <select onChange={(event)=>setDate(event.target.value, {showLayer} )}>
            {
            arrays[0].ndvidates.map((task, index) => (
                <option key={index} value={task}>{task}</option>
            ))}
      </select>
    </div>
  )
}

export default LayerAnalyticsVisualise
