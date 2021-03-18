import Layer from './Layer'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const LayerTree = ({ tasks, changeLayer, category }) => {

  return (
    <div className="LayerTree">
      <p>{category}<KeyboardArrowDownIcon/></p>
      
      {tasks.filter((task) => task.class === category).map((task, index) => (
        <Layer key={index} task={task} changeLayer={changeLayer}  />
      ))}
    </div>
  )
}

export default LayerTree
