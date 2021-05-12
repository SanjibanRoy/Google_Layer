import React from 'react'
import CloudIcon from '@material-ui/icons/Cloud';
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
                <li key={3} onClick={() => changeVisibility('Vegetation')} >< EcoIcon />
                    <span align="center">Vegetation</span>
                </li>
                <hr>
                </hr>
                <li key={4} onClick={() => changeVisibility('Weather')} ><EcoIcon />
                    <span align="center">Weather</span>
                </li>
                <hr>
                </hr>
                <li key={5} onClick={() => changeVisibility('Water_Resources')} ><EcoIcon />
                    <span align="center">Water Resource</span>
                </li>
                <hr>
                </hr>
                <li key={6} onClick={() => changeVisibility('Satellite_Imagery')} ><CloudIcon />
                    <span align="center">Satellite Imagery</span>
                </li>
                <hr>
                </hr>
                <li key={7} onClick={() => changeVisibility('Vedas_Services')} ><CloudIcon />
                    <span>Vedas Services</span>
                </li>
                <hr>
                </hr>
            </ul>
        </div>

    )
}

export default SidePanel