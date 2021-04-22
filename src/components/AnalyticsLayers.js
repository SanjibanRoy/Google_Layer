import LayerAnalytics from './LayerAnalytics'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useState } from 'react'

const AnalyticsLayers = ({ tasks, changeLayer1, category }) => {
  const [showLayer, setShowLayer] = useState(false)

  return (
    <div className="LayerTree" >
      <p onClick={() => setShowLayer(!showLayer)}>{category}{showLayer ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</p>

      <LayerAnalytics task={tasks} changeLayer1={changeLayer1} showLayer={showLayer} />
      <LayerAnalytics task={tasks.filter((task) => task.class === "Natural Resource")} changeLayer1={changeLayer1} showLayer={showLayer} />
    </div>
  )
}

export default AnalyticsLayers
