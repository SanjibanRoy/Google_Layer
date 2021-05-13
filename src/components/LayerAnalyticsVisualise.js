const LayerAnalyticsVisualise = ({ task, changeLayer1, showLayer }) => {
  var arrays = [{
    ndvidates: [200,300],
    soil_moisture_dates: [200,300],
    et_dates: [200,300]
}];

return (
      <div
        className={ `${showLayer? 'activeAnalytics':'task'}`} 
      >
         {showLayer} Date <select onChange={(event)=>changeLayer1(event.target.value , showLayer)}>
            {
            arrays[0].ndvidates.map((task, index) => (
                <option key={index} value={task}>{task}</option>
            ))}
      </select>
    </div>
  )
}

export default LayerAnalyticsVisualise
