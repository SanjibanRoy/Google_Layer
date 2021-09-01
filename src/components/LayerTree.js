import Layer from './Layer'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useState } from 'react'
import  { useEffect } from 'react'
import { useSelector } from "react-redux";
import { selectLayerDataSet } from "../features/layers/overlaylayerslice";

const LayerTree = ({category }) => {
  //console.log({category}.category == "Alerts and Early Warning")
const [showLayer, setShowLayer] = useState(true)
const tasks = useSelector(selectLayerDataSet);

useEffect(() => {
    ({category}.category == "Alerts and Early Warning" ) ? 
    setShowLayer(true) : setShowLayer(false)
}, [setShowLayer]);

  return (
    <div className="LayerTree" >
      {/* {console.log(showLayer)} */}
      <p onClick={() => setShowLayer(!showLayer)}>{category}{showLayer?<KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/>}</p>
      {/* <p>{category}</p> */}
      
      {tasks.filter((task) => task.class === category).map((task, index) => (
        <Layer key={index} task={task} showLayer ={showLayer}/>
      ))}
    </div>
  )
}

export default LayerTree