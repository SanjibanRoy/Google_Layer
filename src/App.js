import { useState } from 'react'
import Map from './components/Map'
import InfoBox from './components/InfoBox'
import Legend from './components/Legend'
import SideBarWrapper from './components/SideBarWrapper'
import {layer} from './config'
import {analytics} from './config'

const App = () => {
  const [tasks, setTasks] = useState(layer)
  const [info, setinfo] = useState([])
  const [analytic,setAnalytics]=useState(analytics)


  //Update Info box
  const updateInfo = (id) => {
    setinfo(
      [
      tasks.filter((task)=>task.show===true).map((t)=>
      {
        return t.layer
      })
      ]      
    )
  }

  // Add Remove Layer
  const activateAnalytics =  (id) => {
    console.log(id)
    setAnalytics(
      analytic.map((task) =>
      task.id == id ? { ...task, show: !task.show } :  { ...task, show: false }
      )
    )
  }
  const activateLayer =  (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, show: !task.show } : task
      )
    )
  }


  return (
      <div className='container'>
        <SideBarWrapper
                tasks={layer}
                activateLayer={activateLayer}
                analyticsLayers = {analytics}
                activateLayer1={activateAnalytics}
        />

       <Map 
        tasks = {tasks}
        changeLayer={activateLayer}
        analyticsLayers = {analytic}
        updateBox = {updateInfo}
        />
        <InfoBox
        info = {info}
        />

        <Legend
        tasks = {tasks}
        />
        
      </div>
  )
}

export default App
