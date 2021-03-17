import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/LayerTree'
import Map from './components/Map'
import InfoBox from './components/InfoBox'
import Legend from './components/Legend'
import SidePanel from './components/SidePanel'
import SideBarWrapper from './components/SideBarWrapper'
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [info, setinfo] = useState([])
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // Add Task
  // const addTask = async (task) => {
  //   const res = await fetch('http://localhost:5000/tasks', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(task),
  //   })

  //   const data = await res.json()

  //   setTasks([...tasks, data])

  //   // const id = Math.floor(Math.random() * 10000) + 1
  //   // const newTask = { id, ...task }
  //   // setTasks([...tasks, newTask])
  // }

  //Update Info box
  const updateInfo = (id) => {
    // for( let prop in id.target._layers ){
    //   console.log( id.target._layers[prop]);
    // }
    console.log(tasks.filter((task)=>task.show===true))
    // let layers =[id.target._layers]
    setinfo(

      [
      tasks.filter((task)=>task.show===true).map((t)=>
      {
        return t.layer
      })
      ] 
      //     [{
        //       "Layer ID": Object.keys(id.target._layers),
        //       "Lat": id.latlng.lat,
        //       "Lon": id.latlng.lng,
        //     },
        //     {
        //       "Layer ID": Object.keys(id.target._layers),
        //       "Lat": id.latlng.lat,
        //       "Lon": id.latlng.lng,
        //     },
        // //     Object.keys(id.target._layers).map(function (element) {
        // //       return(id.target._layers[element])
        // //  })
        // ]
    )
  }

  // Add Remove Layer
  const activateLayer = async (id) => {
    const taskToHide = await fetchTask(id)
    const updTask = { ...taskToHide, show: !taskToHide.show }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })
    const data = await res.json()
    // console.log('In delete Tas')
    //We should control the response status to decide if we will change the state or not.
    // res.status === 200
    //   ? setTasks(tasks.filter((task) => task.id !== id))
    //   : alert('Error Deleting This Task')
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, show: data.show } : task
      )
    )
  }


  return (
      <div className='container'>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <SideBarWrapper
                tasks={tasks}
                activateLayer={activateLayer}
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
