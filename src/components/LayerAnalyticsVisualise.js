import { useDispatch } from "react-redux";
import { setAnalyticsVisual } from "../features/layers/layervisualiseslice";
// import { useSelector } from "react-redux";
// import { selectLayerData } from "../features/layers/layervisualiseslice";

const LayerAnalyticsVisualise = ({showLayer }) => {
  var arrays = [{
    ndvidates: [200,300],
    soil_moisture_dates: [200,300],
    et_dates: [200,300]
}];
const dispatch = useDispatch();
// const state = useSelector(selectLayerData);

const setDate = (date,data) => {
  dispatch(
    setAnalyticsVisual({dataset:data.showLayer,
      dates: date,
      show:true
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
