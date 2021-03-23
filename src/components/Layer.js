import Checkbox from '@material-ui/core/Checkbox';
import InfoIcon from '@material-ui/icons/Info';

const Layer = ({ task, changeLayer, showLayer }) => {
  return (
      <div
        className={ `${showLayer? 'active':'task'}`} 
      >
      <table>
        <tbody>
          <tr>
      <td>        
        <Checkbox color="primary"
          onClick={() => changeLayer(task.id)}
        /></td><td>{task.text}{' '}</td>
        <td><InfoIcon /></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Layer
