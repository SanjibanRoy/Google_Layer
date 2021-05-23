import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LayerAnalyticsVisualise from "./LayerAnalyticsVisualise";


 
const VegetationVisualise = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          width: "100%",
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
      }));
      const [cvalue, setObjectValue] = useState({});
      // ***** hide show of date loader ********
      var flag=false
      
      const handleChange =(e) =>{
        
        if(flag){
          const cvalue = { ...cvalue, [e]: false, };
          setObjectValue(cvalue);
        }
        else{
          const cvalue = { ...cvalue, [e]: true,};
          setObjectValue(cvalue);
        }
        flag = !flag;
      }
      
      // ends here
    const classes = useStyles();
    return (
        <div>
          <Accordion isOpen onChange={isOpen => handleChange('MODISNDVI')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography className={classes.heading}>NDVI</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {cvalue['MODISNDVI'] &&<LayerAnalyticsVisualise showLayer="modis_ndvi" />}
            </AccordionDetails>
          </Accordion>
          <Accordion isOpen  onChange={isOpen => handleChange('SMAP')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Soil Moisture (SMAP)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {cvalue['SMAP'] &&<LayerAnalyticsVisualise showLayer="modis_ndvi" />}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                Evapotranspiration
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* <LayerAnalyticsVisualise showLayer="et" /> */}
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
            {cvalue['et'] &&<LayerAnalyticsVisualise showLayer="modis_ndvi" />}            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                Public Resources
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* <LayerAnalyticsVisualise showLayer="modis_ndvi" /> */}
            </AccordionDetails>
          </Accordion>
        </div>
    )
}

export default VegetationVisualise