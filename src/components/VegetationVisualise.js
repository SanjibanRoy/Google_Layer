import React from 'react'
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
      const classes = useStyles();
    return (
        <div>
               <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>NDVI</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <LayerAnalyticsVisualise showLayer="modisndvi" />
            </AccordionDetails>
          </Accordion>
          <Accordion>
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
              <LayerAnalyticsVisualise showLayer="smap" />
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
              <LayerAnalyticsVisualise showLayer="et" />
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
              <LayerAnalyticsVisualise showLayer="fire" />
            </AccordionDetails>
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
              <LayerAnalyticsVisualise showLayer="Public Resources" />
            </AccordionDetails>
          </Accordion>
        </div>
    )
}

export default VegetationVisualise
