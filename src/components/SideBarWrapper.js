import React, { useState } from 'react'
import SidePanel from './SidePanel'
import LayerTree from './LayerTree'
import AnalyticsLayers from './AnalyticsLayers'
import SatelliteIcon from '@material-ui/icons/Satellite';
import MapIcon from '@material-ui/icons/Map';
// import { panelVisibilty } from '../config'

const SideBarWrapper = ({ tasks, analyticsLayers, activateLayer, activateLayer1, changeVisibility, visibility, ChangeMap }) => {

    // const [visibility, setVisibility] = useState(panelVisibilty)
    // alert(JSON.stringify(visibility))
    // var active = Object.keys(panelVisibilty).filter(k => panelVisibilty[k].show);
    // alert(active)
    //className={this.props.shouldHide ? 'hidden' : ''}
    //alert(JSON.stringify(visibility))
    var data_filter = visibility.filter(element => element.show)
    var type = data_filter[0].id
    return (
        <div className="SideBarWrapper">
            <SidePanel
                changeVisibility={changeVisibility}
            />
            <div className={type === 'Layer' ? 'LayerContainer' : 'hidden'}>
                <ul>

                    <li key={2} onClick={() => ChangeMap('Cartodb')} >< MapIcon />
                        <span> Cartodb</span>
                    </li>
                    <hr>
                    </hr>
                    <li key={3} onClick={() => ChangeMap('Bhuvan')} >< MapIcon />
                        <span> Bhuvan</span>
                    </li>
                    <hr>
                    </hr>
                    <li key={4} onClick={() => ChangeMap('BhuvanSatellite')} ><SatelliteIcon />
                        <span> BhuvanSatellite</span>
                    </li>
                    <hr>
                    </hr>
                    <li key={5} onClick={() => ChangeMap('Open_Street')} ><MapIcon />
                        <span> Open Street</span>
                    </li>
                    <hr>
                    </hr>
                    <li key={6} onClick={() => ChangeMap('Google_Map')} ><MapIcon />
                        <span> Google Map</span>
                    </li>
                    <hr>
                    </hr>
                    <li key={7} onClick={() => ChangeMap('Google_Satellite')} ><SatelliteIcon />
                        <span> Google Satellite</span>
                    </li>
                    <hr>
                    </hr>
                </ul>
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Administrator"
                />
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Land Use/Land Cover"
                />
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Census"
                />

            </div>

            <div className={type === 'Vegetation' ? 'LayerContainer' : 'hidden'}>
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Admin"
                    state='test'
                />
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Natural Resource"
                />
            </div>

            <div className={type === 'Weather' ? 'LayerContainer' : 'hidden'}>
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Admin"
                    state='test'
                />
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Natural Resource"
                />
            </div>

            <div className={type === 'Water_Resources' ? 'LayerContainer' : 'hidden'}>
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Admin"
                    state='test'
                />
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Natural Resource"
                />
            </div>

            <div className={type === 'Satellite_Imagery' ? 'LayerContainer' : 'hidden'}>
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Admin"
                    state='test'
                />
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Natural Resource"
                />
            </div>


            <div className={type === 'Vedas_Services' ? 'LayerContainer' : 'hidden'}>
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Admin"
                    state='test'
                />
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Natural Resource"
                />
            </div>
        </div>




    )
}

export default SideBarWrapper