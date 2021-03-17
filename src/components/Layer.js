import { FaTimes } from 'react-icons/fa'

const Layer = ({ task, changeLayer }) => {
  return (
    <div
      className='task reminder' 
    >
      <table>
      <td>        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => changeLayer(task.id)}
        /></td><td>{task.text}{' '}</td>

      </table>
    </div>
  )
}

export default Layer
