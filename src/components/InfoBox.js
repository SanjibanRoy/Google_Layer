import React from 'react'
import Info from './Info'
const InfoBox = ({info}) => {
    console.log({info})
    return (
        <div className='infobox'>
        {
            info!==undefined?(<Info info={info}/>):"Info Box"
        }
        </div>
    )
}
export default InfoBox

