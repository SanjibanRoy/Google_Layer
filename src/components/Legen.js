import React from 'react'
import { useState, useEffect } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Legen = ({ task, sanju }) => {
  const [showlegend, setShowlegend] = useState(true);

  return (
    <div>
      <p onClick={() => setShowlegend(!showlegend)}>
        {showlegend ? (
          <RemoveIcon />
        ) : (
          <AddIcon />
        )}
        {task.text}
      </p>
      <div className={`${showlegend ? "" : "visibility"}`}>
       { task.clayer !== "lege" ?<img src={sanju} />:
        <img src={task.legend} />}
      </div>
    </div>
  )
}

export default Legen
