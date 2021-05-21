import { useDispatch } from "react-redux";
import {useState, useEffect} from "react";
import { setAnalyticsVisual } from "../features/layers/layervisualiseslice";
// import { useSelector } from "react-redux";
// import { selectLayerData } from "../features/layers/layervisualiseslice";
import {setAnalyticsDetails} from "../features/layers/layerslice"
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
  // dispatch(setAnalyticsDetails({ ...state, dates: e, show: true }));

};

const [date, setdate] = useState({
  dates: [],
  isFetching: false,
});



const fetchDates = async () => {
  try {
    setdate({ dates: [], isFetching: false });
    const formData = new FormData();

    formData.append("database", showLayer);
    formData.append("key", "mgy1exz0n8mXQXi8NrOq24DDvmLrZ16a");
    // console.log(formData);
    fetch("https://mobileapp.nesdr.gov.in/analytics_api/modis_ndvi.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setdate({ dates: result, isFetching: false });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // console.log(response);
    setdate({ ...date, isFetching: true });
  } catch (exception) {
    console.log(exception);
    setdate({ dates: date.dates, isFetching: false });
  }
};




useEffect(() => {
  fetchDates();
}, []);

return (
  
      <div
        className={ `${showLayer? 'activeAnalytics':'task'}`} 
      >
         {showLayer} Date 
         
         <select onChange={(event)=>setDate(event.target.value, {showLayer} )}>
            {
            date.dates.map((task, index) => (
                <option key={index} value={task.time_stamp}>{task.date}</option>
            ))}
      </select>
    </div>
  )
}

export default LayerAnalyticsVisualise
