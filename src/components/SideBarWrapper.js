//import necessary lib
import React from 'react'
import SidePanel from './SidePanel'
import LayerTree from './LayerTree'
import SatelliteIcon from '@material-ui/icons/Satellite';
import MapIcon from '@material-ui/icons/Map';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LayerAnalytics from './LayerAnalytics';
import LayerAnalyticsVisualise from './LayerAnalyticsVisualise';
import VegetationAnalysis from './VegetationAnalysis'
// import CreatableSelect from 'react-select/creatable';
//end of import 

const SideBarWrapper = ({ tasks, analyticsLayers, activateLayer, activateLayer1, changeVisibility, visibility, ChangeMap }) => {
    //Tab view start 
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    //tab view ends

    //accordion start
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }));
    const classes = useStyles();
    // accordion ends

    //hind show sideBarwarapper start
    var data_filter = visibility.filter(element => element.show)
    var type = data_filter[0].id
    // hide show sideBarWrapper ends


    // ******************************** fetch date data from database Start*******************************

    // declare list of array *PS: array used in select in list 


    //main function *API Key Required
    // function getdates(name, value) {
    //     const formData = new FormData();
    //     formData.append('database', name);
    //     fetch(
    //         'https://mobileapp.nesdr.gov.in/analytics_api/modis_ndvi.php?key=mgy1exz0n8mXQXi8NrOq24DDvmLrZ16a',
    //         {
    //             method: 'POST',
    //             body: formData,
    //         }
    //     )
    //         .then((response) => response.json())
    //         .then((result) => {
    //             //console.log('Success:', result);
    //             let datafromapi = result.map(data => {
    //                 arrays[value].push({
    //                     value: data.date,
    //                     label: data.date,
    //                     rating: data.date
    //                 })
    //             })
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    // }

    // setTimeout(
    //     function () {
    //        // console.log(arrays.ndvidates[0].value)
    //     }
    //         .bind(this),
    //     2000
    // );
    // get date function *PS: put database name and array name used in select list 
    // getdates('modis_ndvi', 'ndvidates')
    // getdates('soil_date', 'soil_moisture_dates')
    // getdates('et', 'et_dates')

    // ******************************** fatch date data from database End here*******************************




    //return view
    return (
        <div className="SideBarWrapper">
            {/* load of side panel start */}
            <SidePanel
                changeVisibility={changeVisibility}
            />
            {/* load of side panel start */}

            {/* *************Layer Tab start*************** */}
            
            <div className={type === 'Layer' ? 'LayerContainer' : 'hidden'}>
                {/* List of map layers */}
                <Paper square>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Base Layers" />
                        <Tab label="Overlays" />

                    </Tabs>

                </Paper>
                <div className={value === 0 ? ' ' : 'hidden'}>
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
                </div>
                <div className={value === 1 ? ' ' : 'hidden'}>
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
            </div>
            {/* *************Layer Tab end*************** */}


            {/* *************Vegetation Tab start*************** */}
            <div className={type === 'Vegetation' ? 'LayerContainer' : 'hidden'}>
                {/* Tab View */}
                <Paper square>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Visualization" />
                        <Tab label="Analysis" />
                    </Tabs>
                </Paper>
                {/* Tab1 Data */}
                <div className={value === 0 ? ' ' : 'hidden'}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>NDVI</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalyticsVisualise  showLayer="modisndvi" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Soil Moisture (SMAP)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalyticsVisualise   showLayer="smap" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography className={classes.heading}>Evapotranspiration</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalyticsVisualise  showLayer="et" />

                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography className={classes.heading}>Forest Fire</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalyticsVisualise   showLayer="fire" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography className={classes.heading}>Public Resources</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer={true} />
                        </AccordionDetails>
                    </Accordion>
                </div>
                {/* Tab2 Data */}
                <div className={value === 1 ? ' ' : 'hidden'}>

                            <VegetationAnalysis task={analyticsLayers} changeLayer1={activateLayer1} showLayer="modisndvi" />
                </div>

            </div>
            {/* *************Vegetation Tab end*************** */}


            {/* *************Weather Tab start*************** */}
            <div className={type === 'Weather' ? 'LayerContainer' : 'hidden'}>
            <Paper square>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Visualization" />
                        <Tab label="Analysis" />
                    </Tabs>
                </Paper>
                {/* Tab1 Data */}
                <div className={value === 0 ? ' ' : 'hidden'}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Temperature</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="modisndvi" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Air Quaility (AOD)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="smap" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography className={classes.heading}>Weather Forecast (WRF)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="et" />

                        </AccordionDetails>
                    </Accordion>
                </div>
                {/* Tab2 Data */}
                <div className={value === 1 ? ' ' : 'hidden'}>
                <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Cumulative Analysis</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="modisndvi" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Statistical Analysis</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="smap" />
                        </AccordionDetails>
                    </Accordion>
                </div>

            </div>
            {/* *************Weather Tab end*************** */}

            {/* *************Water Resources Tab start*************** */}
            <div className={type === 'Water_Resources' ? 'LayerContainer' : 'hidden'}>
            <Paper square>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Visualization" />
                        <Tab label="Analysis" />
                    </Tabs>
                </Paper>
                {/* Tab1 Data */}
                <div className={value === 0 ? ' ' : 'hidden'}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>NDWI</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="modisndvi" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Flood Inundation</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="smap" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography className={classes.heading}>Public Resources</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="et" />

                        </AccordionDetails>
                    </Accordion>
                </div>
                {/* Tab2 Data */}
                <div className={value === 1 ? ' ' : 'hidden'}>
                <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Change Analysis</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="modisndvi" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Statistical Analysis</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="smap" />
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            {/* *************Water Resources Tab end*************** */}

            {/* *************Satellite Imagery Tab start*************** */}
            <div className={type === 'Satellite_Imagery' ? 'LayerContainer' : 'hidden'}>
            <Paper square>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Visualization" />
                        <Tab label="Analysis" />
                    </Tabs>
                </Paper>
                {/* Tab1 Data */}
                <div className={value === 0 ? ' ' : 'hidden'}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Landsat</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="modisndvi" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Sentinel</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="smap" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography className={classes.heading}>VIIRS Nightlight</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="et" />

                        </AccordionDetails>
                    </Accordion>
                </div>
                {/* Tab2 Data */}
                <div className={value === 1 ? ' ' : 'hidden'}>
                <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Change Detection</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="smap" />
                        </AccordionDetails>
                    </Accordion>
                <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Index</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="modisndvi" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Band Math Operations</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LayerAnalytics task={analyticsLayers} changeLayer1={activateLayer1} showLayer="smap" />
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            {/* *************Satellite Imagery Tab end*************** */}

            {/* *************Vedas Services Tab start*************** */}
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
            {/* *************Vedas Services Tab start*************** */}
        </div>
    )
}

export default SideBarWrapper