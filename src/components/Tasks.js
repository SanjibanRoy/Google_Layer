import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, category }) => {
  console.log(category, tasks.filter((task) => task.class === category))
  
  return (
    <>
      {tasks.filter((task) => task.class === category).map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Tasks
