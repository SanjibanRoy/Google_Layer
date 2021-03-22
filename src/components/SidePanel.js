import React from 'react'
import CloudIcon from '@material-ui/icons/Cloud';
import LayersIcon from '@material-ui/icons/Layers';
import EcoIcon from '@material-ui/icons/Eco';

const SidePanel = ({changeVisibility}) => {

    return (
        <div className="SidePanel">
            <ul>
                <li className="logo"><img src="./NeSDRLogo1.png"/>
                </li>
                <li><CloudIcon/>
                    <span>Cloud</span>
                </li>
                <hr></hr>
                <li><LayersIcon onClick={() => changeVisibility()}/>
                <span>Layer</span>
                </li>
                <hr></hr>
                <li><EcoIcon/>
                <span>Vegetation</span>
                </li>
                <li><CloudIcon/>
                <span>Cloud</span>
                </li>
            </ul>
        </div>
        
    )
}

export default SidePanel