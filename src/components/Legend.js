import React from 'react'

const Legend = ({tasks}) => {
    return (
        <div className='Legend'>
           {tasks.filter((task)=>task.show==true).map((task)=>(
                <p key ={task.id}>{task.text}</p>
           ))}
        </div>
    )
}

export default Legend
