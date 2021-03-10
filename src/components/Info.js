import React from 'react'

const Info = ({info}) => {
    return (
        <div>
            {
            
                    <table border={2} cellPadding={5}>
                    <thead>
                       <tr>
                         <td>Key</td>
                         <td>Value</td>
                       </tr>
                    </thead>
                    <tbody>
                       {
                           
                           Object.keys(info).map(function (element, index) {
                              return <tr key={index}>
                                <td>{element}</td>
                                <td>{info[element]}</td>
                              </tr>
                           })
                       }
                    </tbody>
                 </table>
    
               
            }
        </div>
    )
}

export default Info
