import React from 'react'
import SidePanel from './SidePanel'
import LayerTree from './LayerTree'
import AnalyticsLayers from './AnalyticsLayers'

const SideBarWrapper = ({ tasks, activateLayer, activateLayer1}) => {
    
    return (
        <div className="SideBarWrapper">
            <SidePanel />
            <div className="LayerContainer">
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Admin"
                />
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Natural Resource"
                />
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Agri"
                />
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Disaster"
                />
                <AnalyticsLayers
                    tasks={tasks}
                    changeLayer1={activateLayer1}
                    category="Disaster"
                />
            </div>
        </div>
    )
}

export default SideBarWrapper