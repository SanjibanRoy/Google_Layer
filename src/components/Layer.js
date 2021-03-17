import Checkbox from '@material-ui/core/Checkbox';

const Layer = ({ task, changeLayer }) => {
  return (
    <div
      className='task reminder' 
    >
      <table>
      <td>        <Checkbox
                 color="primary"

          onClick={() => changeLayer(task.id)}
        /></td><td>{task.text}{' '}</td>

      </table>
    </div>
  )
}

export default Layer
