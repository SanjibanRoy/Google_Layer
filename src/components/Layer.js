import { FaTimes } from 'react-icons/fa'

const Layer = ({ task, changeLayer }) => {
  return (
    <div
      className='task reminder' 
    >
      <h5>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => changeLayer(task.id)}
        />
      </h5>
    </div>
  )
}

export default Layer
