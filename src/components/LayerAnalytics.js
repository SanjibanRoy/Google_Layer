
const LayerAnalytics = ({ task, changeLayer1, showLayer }) => {
  console.log(task)
  return (
      <div
        className={ `${showLayer? 'active':'task'}`} 
      >
           <select onChange={(event)=>changeLayer1(event.target.value)}>
              {/* <option value="1">Test</option> */}
            {
            task.map((task, index) => (
                <option key={index} value={task.ndvidates}>{task.ndvidates}</option>
            ))}
      </select>
    </div>
  )
}

export default LayerAnalytics
