export const layer = [
  //Administrator boundary start
  // {
  //   id: 1,
  //   text: "State Boundary",
  //   show: true,
  //   class: "Administrative",
  //   layer: "NEC:ner_states",

  //   link: "https://apps.nesdr.gov.in:442/geoserver/wms"
  // },
  {
    id: 1,
    text: "District Boundary",
    show: true,
    class: "Administrative",
    layer: "NEC:assam_dist",
    link: "https://apps.nesdr.gov.in:442/geoserver/NEC/wms",
    info: "District Boundary",
  },
  {
    id: 2,
    text: "Revenue Circle",
    show: false,
    class: "Administrative",
    layer: "NEC:assam_dist",
    link: "https://apps.nesdr.gov.in:442/geoserver/NEC/wms",
    info: "Revenue Circle",

  },
  // Administrator boundary end

  // Land Use and Land Cover Start
  {
    id: 3,
    text: "LULC (2005-06)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:ner_landuse_landcover_50k_1st_cycle",
    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
    info: "Revenue Circle",

  },
  {
    id: 4,
    text: "LULC(2011-12)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:lulc2ndcycle",
    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
    info: "Revenue Circle",

  },
  {
    id: 5,
    text: "LULC(2015-16)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "AS_LULC_3RD_CYCLE",
    link: "https://www.nesdr.gov.in/igistile/State_QC_passed_LULC_1516WS/wms",
    info: "LULC(2015-16)",

  },
  // Land Use and Land Cover end

  // Census strat
  {
    id: 6,
    text: "Census",
    show: false,
    class: "Census",
    layer: "NEC:assam_census",
    link: "https://apps.nesdr.gov.in:442/geoserver/NEC/wms",
  },
  {
    id: 7,
    text: "Embankment",
    show: false,
    class: "Disaster Mitigation",
    layer: "NEWRM:ne_embankments",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  {
    id: 8,
    text: "Breach Locations",
    show: false,
    class: "Disaster Mitigation",
    layer: "NEWRM:ne_breach_total_locations",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  {
    id: 9,
    text: "Erosion Deposition",
    show: false,
    class: "Disaster Mitigation",
    layer: "NEWRM:NE_ErosionDeposition",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  {
    id: 10,
    text: "Landslide",
    show: false,
    class: "Disaster Mitigation",
    layer: "disaster:AS_SLIM_2014_GCS",
    link: "https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",
  },
  {
    id: 11,
    text: "Flood Inundation",
    show: false,
    class: "Disaster Mitigation",
    layer: "FLEWS:1august20",
    options: [
      { value: "FLEWS:1august20", text: "FLEWS:1august20" },
      { value: "FLEWS:1august20", text: "FLEWS:1august20" },
      { value: "FLEWS:1august20", text: "FLEWS:1august20" },
      { value: "FLEWS:1august20", text: "FLEWS:1august20" },
    ],
    link: "https://apps.nesdr.gov.in:442/geoserver/FLEWS/wms",
  },
  {
    id: 12,
    text: "Flood Alerts",
    show: false,
    class: "Alerts and Early Warning",
    layer: "FLEWS:assam_rc_utm",
    link: "https://apps.nesdr.gov.in:442/geoserver/FLEWS/wms",
  },
  {
    id: 13,
    text: "Lightning Alerts",
    show: false,
    class: "Alerts and Early Warning",
    layer:"FLEWS:1august20",

    link: "https://apps.nesdr.gov.in:442/geoserver/FLEWS/wms",
  },
  {
    id: 14,
    text: "Thunderstorm",
    show: false,
    class: "Alerts and Early Warning",
    layer: "FLEWS:1august20",
    link: "https://apps.nesdr.gov.in:442/geoserver/FLEWS/wms",
  },
  {
    id: 15,
    text: "Earthquake",
    show: false,
    class: "Disaster Mitigation",
    layer: "NEWRM:ne_earthquake",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  // census end
];

// maps configuration
export const maps = [
  //maps start
  {
    id: 1,
    text: "Cartodb",
    show: true,
    class: "Maps",
    layer: "analytic:ner_boundary",
    link: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    format: "image/png",
    domain: " ",
    type: "tile",
    image: "carto.jpg",
  },
  {
    id: 2,
    text: "Bhuvan",
    show: false,
    class: "Maps",
    layer: "india3",
    link: "https://bhuvan-vec1.nrsc.gov.in/bhuvan/gwc/service/wms/",
    format: "image/png",
    domain: " ",
    image: "bhuvanmaps.png",
  },
  {
    id: 3,
    text: "BhuvanSatellite",
    show: false,
    class: "Maps",
    layer: "bhuvan_imagery2",
    link: "https://bhuvan-ras2.nrsc.gov.in/tilecache/tilecache.py?",
    format: "png/jpeg",
    domain: " ",
    image: "bhuvan.png",
  },
  {
    id: 4,
    text: "Open Street",
    show: false,
    class: "Maps",
    link: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    format: "png/jpeg",
    domain: " ",
    type: "tile",
    image: "osm.png",
  },
  {
    id: 5,
    text: "Google Map",
    show: false,
    class: "Maps",
    layer: "analytic:ner_boundary",
    link: "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    format: "image/png",
    domain: "['mt0','mt1','mt2','mt3']",
    image: "osm.png",
  },
  {
    id: 6,
    text: "Google Satellite",
    show: false,
    class: "Maps",
    layer: "analytic:ner_boundary",
    link: "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    format: "image/png",
    domain: ["mt0", "mt1", "mt2", "mt3"],
    image: "google.png",
  },
  //maps end
];

// analytics layer
export const analyticoper = [
  {
    id: 2,
    text: "modisndvi",
    wmsname: "modis_ndvi",
    state: "modis_ndvi",
    wmsname_op: "modis_ndvi",
    show: false,
    yearrange: [
      2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
      2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    ],
    operations: [
      { value: "diff", text: "Change", legend: "" },
      { value: "mean", text: "Mean", legend: "" },
      { value: "max", text: "Maximum", legend: "" },
      { value: "min", text: "Minimum", legend: "" },
      { value: "std", text: "Standard Deviation", legend: "" },
      { value: "range", text: "Range", legend: "" },
      { value: "vci", text: "Vegetation Condition Index", legend: "" },
      { value: "trend", text: "Trend", legend: "" },
      { value: "anomaly", text: "Anomaly", legend: "" },

      { value: "rgb", text: "RGB", legend: "" },
    ],
    // legends: [],
    category: "vegetation",
  },
  {
    id: 3,
    text: "smap",
    wmsname: "soil",
    state: "soil_date",
    wmsname_op: "soil",

    yearrange: [
      2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
      2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    ],
    show: false,
    operations: [
      { value: "difference", text: "Change", legend: "" },
      { value: "Mean", text: "Mean", legend: "" },
      { value: "Maximum", text: "Maximum", legend: "" },
      { value: "Minimum", text: "Minimum", legend: "" },
      { value: "sd", text: "Standard Deviation", legend: "" },
      { value: "cv", text: "Coefficient of Variance", legend: "" },
    ],
    category: "vegetation",
  },
  {
    id: 4,
    text: "et",
    wmsname: "et",
    state: "et",
    wmsname_op: "et",

    yearrange: [
      2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
      2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    ],
    show: false,
    operations: [
      { value: "diff", text: "Change", legend: "" },
      { value: "mean", text: "Mean", legend: "" },
      { value: "max", text: "Maximum", legend: "" },
      { value: "min", text: "Minimum", legend: "" },
      { value: "std", text: "Standard Deviation", legend: "" },
      // { value: "cv", text: "Coefficient of Variance", legend: "" },
    ],
    category: "vegetation",
  },
  {
    id: 4,
    text: "INSAT Rainfall",
    wmsname: "insat_rain",
    state: "insat_rainfall",
    wmsname_op: "insat_rain",

    yearrange: [
      2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
      2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    ],
    show: false,
    operations: [
      { value: "sum", text: "Sum", legend: "" },
      { value: "mean", text: "Mean", legend: "" },
      { value: "max", text: "Maximum", legend: "" },
    ],
    category: "weather",
  },
  {
    id: 5,
    text: "Air Quality AOD",
    wmsname: "aod",
    state: "aod_date",
    wmsname_op: "aod",

    yearrange: [
      2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
      2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    ],
    show: false,
    operations: [
      { value: "sum", text: "Change", legend: "" },
      { value: "Mean", text: "Mean", legend: "" },
      { value: "Maximum", text: "Maximum", legend: "" },
    ],
    category: "weather",
  },
  {
    id: 5,
    text: "Land Surface Temperature",
    wmsname: "lst",
    state: "lst_date",
    wmsname_op: "lst",

    yearrange: [
      2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
      2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    ],
    show: false,
    operations: [
      { value: "diff", text: "Change", legend: "" },
      { value: "mean", text: "Mean", legend: "" },
      { value: "max", text: "Maximum", legend: "" },
    ],
    category: "weather",
  },
  {
    id: 6,
    text: "MODIS NRT FLood",
    wmsname: "modis_flood",
    state: "modis_flood",
    yearrange: [
      2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
      2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    ],
    show: false,
    operations: [
      { value: "sum", text: "Change", legend: "" },
      { value: "mean", text: "Mean", legend: "" },
      { value: "Maximum", text: "Maximum", legend: "" },
    ],
    category: "weather",
  },
  {
    id: 6,
    text: "Sentinel",
    wmsname: "Sentinal",
    state: "Sentinal",
    yearrange: [
      2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
      2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    ],
    show: false,
    operations: [
      { value: "sum", text: "Change", legend: "" },
      { value: "mean", text: "Mean", legend: "" },
      { value: "Maximum", text: "Maximum", legend: "" },
    ],
    category: "weather",
  },
];

// side pannel visibility
export const panelVisibilty = [
  {
    id: "Alert",
    text: "Alert",
    show: false,
    panel: false,
  },
  {
    id: "Layer",
    text: "Layer",
    show: true,
    panel: true,
  },
  {
    id: "Weather",
    text: "Weather",
    show: false,
    panel: false,
  },
  {
    id: "Satellite_Imagery",
    text: "Satellite_Imagery",
    show: false,
    panel: false,
  },
  {
    id: "Vedas_Services",
    text: "Vedas_Services",
    show: false,
    panel: false,
  },
  {
    id: "Water_Resources",
    text: "Water_Resources",
    show: false,
    panel: false,
  },
];

//list of dates
