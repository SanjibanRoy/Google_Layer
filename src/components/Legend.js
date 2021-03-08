import React from 'react'

const Legend = ({tasks}) => {
    return (
        <div className='Legend'>
           {tasks.filter((task)=>{
                <p>{task.text}</p>
            })}
        </div>
    )
}

export default Legend
