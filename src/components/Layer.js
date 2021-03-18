import Checkbox from '@material-ui/core/Checkbox';

const Layer = ({ task, changeLayer, showLayer }) => {
  return (
      <div
        className={ `${showLayer? 'active':'task'}`} 
      >
      <table>
      <td>        
        <Checkbox color="primary"
          onClick={() => changeLayer(task.id)}
        /></td><td>{task.text}{' '}</td>

      </table>
    </div>
  )
}

export default Layer
