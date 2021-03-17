import React from 'react'
import CloudIcon from '@material-ui/icons/Cloud';
import LayersIcon from '@material-ui/icons/Layers';
import EcoIcon from '@material-ui/icons/Eco';
const SidePanel = () => {
    return (
        <div className="SidePanel">
            <ul>
                <li><CloudIcon/></li>
                <hr></hr>
                <li><LayersIcon/></li>
                                <hr></hr>

                <li><EcoIcon/></li>
                <li><CloudIcon/></li>
            </ul>
        </div>
    )
}

export default SidePanel