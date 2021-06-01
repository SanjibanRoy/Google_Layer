import React from 'react'
import WarningIcon from '@material-ui/icons/Warning';
import LayersIcon from '@material-ui/icons/Layers';
import EcoIcon from '@material-ui/icons/Eco';
const SidePanel = ({ changeVisibility }) => {

    return (
        <div className="SidePanel">
            <ul>
                <li key={1} ><img src="./NeSDRLogo1.png" alt='nesdr-logo' />
                </li>
                <hr>
                </hr>
                <li key={2} onClick={() => changeVisibility('Layer')} >< LayersIcon />
                    <span align="center">Layer</span>
                </li>
                <hr>
                </hr>
                <li key={3} onClick={() => changeVisibility('Alert')} >< WarningIcon />
                    <span align="center">Alert</span>
                </li>
                <hr>
                </hr>
                
            </ul>
        </div>

    )
}

export default SidePanel