import { useState, useEffect } from 'react'
import Map from './components/Map'
import InfoBox from './components/InfoBox'
import Legend from './components/Legend'
import SideBarWrapper from './components/SideBarWrapper'
import {layer} from './config'
const App = () => {
  const [tasks, setTasks] = useState([])
  const [info, setinfo] = useState([])
  const []=useState([])


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
  const activateLayer1 =  (id) => {
    console.log(id)
  }
  const activateLayer =  (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, show: !task.show } : task
      )
    )
  }
  useEffect(() => {
    const getTasks = async () => {
     // const tasksFromServer = await fetchTasks()
      setTasks(layer)
    }
    getTasks()
  }, [])

  return (
      <div className='container'>
        <SideBarWrapper
                tasks={layer}
                activateLayer={activateLayer}
                activateLayer1={activateLayer1}

        />
       <Map 
        tasks = {tasks}
        changeLayer={activateLayer}

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
