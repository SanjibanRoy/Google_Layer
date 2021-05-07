//import necessary lib
import React, { Component } from 'react'
import SidePanel from './SidePanel'
import LayerTree from './LayerTree'
import AnalyticsLayers from './AnalyticsLayers'
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
import Select from 'react-select';

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


    // ******************************** fatch date data from database Start*******************************

    // declare list of array *PS: array used in select in list 
    var arrays = {
        ndvidates: [],
        soil_moisture_dates: [],
        et_dates: []
    };

    //main function *API Key Required
    function getdates(name, value) {
        const formData = new FormData();
        formData.append('database', name);
        fetch(
            'https://mobileapp.nesdr.gov.in/analytics_api/modis_ndvi.php?key=mgy1exz0n8mXQXi8NrOq24DDvmLrZ16a',
            {
                method: 'POST',
                body: formData,
            }
        )
            .then((response) => response.json())
            .then((result) => {
                //console.log('Success:', result);
                let datafromapi = result.map(data => {
                    arrays[value].push({
                        value: data.date,
                        label: data.date,
                        rating: data.date
                    })
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    setTimeout(
        function () {
            console.log(arrays.ndvidates[0].value)
        }
            .bind(this),
        2000
    );
    // get date function *PS: put database name and array name used in select list 
    getdates('modis_ndvi', 'ndvidates')
    getdates('soil_date', 'soil_moisture_dates')
    getdates('et', 'et_dates')

    // ******************************** fatch date data from database End here*******************************

    //handle input change

    const handleInputChange = (newValue) => {
        if (newValue) {
            const inputValue = newValue.replace(/\W/g, '');
            console.log(newValue)
            alert('HI')
        }
        else {
            console.log('Empty')
        }
    };



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
                            <Typography className={classes.heading}>MODIS NDVI</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <Select className="css-e56m7-control"
                                defaultValue="Select"
                                label="Single select"
                                options={arrays.ndvidates}
                                onChange={handleChange}
                                theme={theme => ({
                                    ...theme,

                                    borderRadius: 1,

                                })}
                            />

                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>SOIL MOISTURE (SMAP)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Select className="css-e56m7-control"
                                defaultValue={arrays.soil_moisture_dates[2]}
                                label="Single select"
                                options={arrays.soil_moisture_dates}
                                theme={theme => ({
                                    ...theme,

                                    borderRadius: 1,

                                })}
                            />
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
                            <Select className="css-e56m7-control"
                                defaultValue={arrays.et_dates[2]}
                                label="Single select"
                                options={arrays.et_dates}
                                theme={theme => ({
                                    ...theme,

                                    borderRadius: 1,

                                })}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography className={classes.heading}>Tree cover</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Select className="css-e56m7-control"
                                defaultValue={arrays.ndvidates[2]}
                                label="Single select"
                                options={arrays.ndvidates}
                                theme={theme => ({
                                    ...theme,

                                    borderRadius: 1,

                                })}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Tree cover gain</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Select className="css-e56m7-control"
                                defaultValue={arrays.ndvidates[2]}
                                label="Single select"
                                options={arrays.ndvidates}
                                theme={theme => ({
                                    ...theme,

                                    borderRadius: 1,

                                })}
                            />
                        </AccordionDetails>
                    </Accordion>

                </div>
                {/* Tab2 Data */}
                <div className={value === 1 ? ' ' : 'hidden'}>
                    <LayerTree
                        tasks={tasks}
                        changeLayer={activateLayer}
                        category="Two"
                        state='test'
                    />
                    <LayerTree
                        tasks={tasks}
                        changeLayer={activateLayer}
                        category="Natural Resource"
                    />
                </div>

            </div>
            {/* *************Vegetation Tab end*************** */}


            {/* *************Weather Tab start*************** */}
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
            {/* *************Weather Tab end*************** */}

            {/* *************Water Resources Tab start*************** */}
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
            {/* *************Water Resources Tab end*************** */}

            {/* *************Satellite Imagery Tab start*************** */}
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