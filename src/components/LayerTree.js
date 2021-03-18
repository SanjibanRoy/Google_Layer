import Layer from './Layer'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useState } from 'react'

const LayerTree = ({ tasks, changeLayer, category }) => {
const [showLayer, setShowLayer] = useState(false)

  return (
    <div className="LayerTree" >
      <p onClick={() => setShowLayer(!showLayer)}>{category}{showLayer?<KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/>}</p>
      
      {tasks.filter((task) => task.class === category).map((task, index) => (
        <Layer key={index} task={task} changeLayer={changeLayer}  showLayer ={showLayer}/>
      ))}
    </div>
  )
}

export default LayerTree
