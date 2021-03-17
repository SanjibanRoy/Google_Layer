import React from 'react'
import SidePanel from './SidePanel'
import LayerTree from './LayerTree'
const SideBarWrapper = ({ tasks, activateLayer }) => {
    return (
        <div className="SideBarWrapper">
            <SidePanel/>
            <LayerTree
        tasks={tasks}
        changeLayer={activateLayer}
        category = "Admin"
        />
        
        <LayerTree
        tasks={tasks}
        changeLayer={activateLayer}
        category = "Natural Resource"
        />

        <LayerTree
        tasks={tasks}
        changeLayer={activateLayer}
        category = "Agri"
        />
        
        <LayerTree
        tasks={tasks}
        changeLayer={activateLayer}
        category = "Disaster"
        />
        </div>
    )
}

export default SideBarWrapper