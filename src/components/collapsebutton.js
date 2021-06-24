import React from 'react';
import { Grid } from '@material-ui/core'
import "../cbutton.css"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StatsBox from "./StatsBox";
import FocusBox from "./FocusBox";
import InfoBox from "./InfoBox";
import {useEffect} from "react"
import { useSelector } from "react-redux";
import { selectMapstate } from "../features/maps/mapStateSlice";
function TabPanel(props) {
    console.log(props)
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));
export default function Cbutton() {
    const state = useSelector(selectMapstate);

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(value)
        setValue(newValue);
    };
    useEffect(() => {
        // AddAnalytics()
        openNav1();
      }, [state]);
      useEffect(() => {
        // AddAnalytics()
        closeNav();
      }, []);
    return (     
        <>
            <Grid item xs={12} container>
                <Grid item lg={12} sm={12} xs={12}>
                    <button id="main" className="openbtn" onClick={openNav}>D<br></br>A<br></br>T<br></br>A</button>
                </Grid>
            </Grid>
            <Grid item xs={12} container>
                <Grid item lg={12} sm={12} xs={12}>
                    <div id="mySidebar" className="sidebar">
                        <div className={classes.root}>
                            <AppBar position="static">
                                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                    <Tab label="Info"  />
                                    <Tab label="Stats"  />
                                </Tabs>
                            </AppBar>
                            <TabPanel value={value} index={0}>
                                <InfoBox />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <FocusBox />
                                <StatsBox />
                            </TabPanel>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
var toggle1 = true;
function openNav() {
    if (toggle1) {
        openNav1();
    }
    else {
        closeNav();
    }
    toggle1 = !toggle1;
}
function openNav1() {
    document.getElementById("mySidebar").style.width = "20rem";
    document.getElementById("main").style.right = "20rem";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.right = "0";
}