import React from 'react'
import Info from './Info'
const InfoBox = ({info}) => {
    // console.log({info})
    return (
        <div className='infobox'>
        {
            info!==undefined?(
               info.map((task, index) => (
                    <Info key={index} info={task}  />
                  ))
            
            
            
            ):"Info Box"
        }
        </div>
    )
}
export default InfoBox

