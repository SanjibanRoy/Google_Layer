import Layer from './Layer'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useState } from 'react'
import { useSelector } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";

const LayerTree = ({category }) => {
const [showLayer, setShowLayer] = useState(false)
const tasks = useSelector(selectLayerDataSet);

  return (
    <div className="LayerTree" >
      <p onClick={() => setShowLayer(!showLayer)}>{category}{showLayer?<KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/>}</p>
      
      {tasks.filter((task) => task.class === category).map((task, index) => (
        <Layer key={index} task={task} showLayer ={showLayer}/>
      ))}
    </div>
  )
}

export default LayerTree
