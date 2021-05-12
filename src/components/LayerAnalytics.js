
const LayerAnalytics = ({ task, changeLayer1, showLayer }) => {
  return (
      <div
        className={ `${showLayer? 'active':'task'}`} 
      >
           <select onChange={(event)=>changeLayer1(event.target.value)}>
            {
            task.map((task, index) => (
                <option key={index} value={task.id}>{task.text}</option>
            ))}
      </select>
    </div>
  )
}

export default LayerAnalytics
