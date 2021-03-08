import Layer from './Layer'

const LayerTree = ({ tasks, changeLayer, category }) => {

  return (
    <>
      <p>{category}</p>
      {tasks.filter((task) => task.class === category).map((task, index) => (
        <Layer key={index} task={task} changeLayer={changeLayer}  />
      ))}
    </>
  )
}

export default LayerTree
