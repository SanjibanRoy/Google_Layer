import Checkbox from '@material-ui/core/Checkbox';
import InfoIcon from '@material-ui/icons/Info';

const Layer = ({ task, changeLayer, showLayer }) => {
  return (
      <div
        className={ `${showLayer? 'active':'task'}`} 
      >
      
        <Checkbox color="primary"
          onClick={() => changeLayer(task.id)}
        />
        {task.text}{' '}
        <InfoIcon />
        
       
    </div>
  )
}

export default Layer
