
const LayerAnalytics = ({ task, changeLayer1, showLayer }) => {
  var arrays = [{
    ndvidates: 200,
    soil_moisture_dates: [200,300],
    et_dates: [200,300]
}];
  return (
      <div
        className={ `${showLayer? 'activeAnalytics':'task'}`} 
      >
          Date <select onChange={(event)=>changeLayer1(event.target.value)}>
            {
            task.map((task, index) => (
                <option key={index} value={task.id}>{task.text}</option>
            ))}
      </select>
    </div>
  )
}

export default LayerAnalytics
