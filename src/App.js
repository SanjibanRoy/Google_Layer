import { useState } from 'react'
import Map from './components/Map'
import InfoBox from './components/InfoBox'
import Legend from './components/Legend'
import SideBarWrapper from './components/SideBarWrapper'
import { layer } from './config'
import { analytics } from './config'
import { panelVisibilty } from './config'
import { maps } from './config'


const App = () => {
  const [tasks, setTasks] = useState(layer)
  const [info, setinfo] = useState([])
  const [analytic, setAnalytics] = useState(analytics)
  const [visibility, setVisibility] = useState(panelVisibilty)
  const [mapsvisibility, setmaps] = useState(maps)



  //Update Info box
  const updateInfo = (id) => {
    setinfo(
      [
        tasks.filter((task) => task.show === true).map((t) => {
          return t.layer
        })
      ]
    )
  }
  // add or remove map 
  const ChangeMap = (id) => {
    console.log(id)
    setmaps(
      mapsvisibility.map((task) =>
        task.id === id ? { ...task, show: !task.show } : { ...task, show: false }
      )
    )
  }

  // Add Remove Layer
  const activateAnalytics = (id, typeLayer) => {
    console.log(id, typeLayer)
    setAnalytics(
      analytic.map((task) =>
        task.text == typeLayer ? { ...task, show: true } : { ...task, show: false }
      )
    )
  }
  const activateLayer = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, show: !task.show } : task
      )
    )
  }
  //toggle visibility 
  const changeVisibility = (id) => {

    setVisibility(
      visibility.map((task) =>
        task.id === id ? { ...task, show: true } : { ...task, show: false }
      )
    )
    //changeVisibility: false 

    //content 




  }
  return (
    <div className='container'>

      <SideBarWrapper
        visibility={visibility}
        tasks={layer}
        activateLayer={activateLayer}
        analyticsLayers={analytics}
        activateLayer1={activateAnalytics}
        changeVisibility={changeVisibility}
        ChangeMap={ChangeMap}

      />

      <Map
        tasks={tasks}
        changeLayer={activateLayer}
        analyticsLayers={analytic}
        updateBox={updateInfo}
        mapslayer={mapsvisibility}
      />
      <InfoBox
        info={info}
      />

      <Legend
        tasks={tasks}
      />

    </div>
  )
}

export default App
