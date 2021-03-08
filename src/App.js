import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/LayerTree'
import Map from './components/Map'
import About from './components/About'
import InfoBox from './components/InfoBox'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [info, setinfo] = useState(
    "Test1"
)
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
  //Update Info
  const updateInfo = (id) => {
    console.log(id)
    setinfo("Test"+Object.keys(id.target._layers)+
            "coodrinates"+id.latlng.lat
         // info.map((e) =>
      // {
      //   Object.keys(id)
      //  // return(Object.keys(id))
      // }
     // )
    )
    // console.log("Testing Info Update", id)
  }
  // Delete Task
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
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />               
        <Tasks
        tasks={tasks}
        changeLayer={activateLayer}
        category = "Admin"
      />
        <Tasks
        tasks={tasks}
        changeLayer={activateLayer}
        category = "Natural Resource"

      />
        <Tasks
        tasks={tasks}
        changeLayer={activateLayer}
        category = "Agri"

      />
        <Map 
        tasks = {tasks}
        changeLayer={activateLayer}
        updateBox = {updateInfo}
        />
        <InfoBox
        info = {info}
        />

        
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
