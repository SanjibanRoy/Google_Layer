export const layer = [
  //Administrator boundary start
  {
    id: 1,
    text: "State Boundary",
    show: true,
    class: "Administrative",
    layer: "NEC:ner_states",
  },
  {
    id: 2,
    text: "District Boundary",
    show: false,
    class: "Administrative",
    layer: "analytic:ner_boundary",
  },
  // Administrator boundary end

  // Land Use and Land Cover Start
  {
    id: 3,
    text: "LULC (2005-06)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:ner_landuse_landcover_50k_1st_cycle",
  },
  {
    id: 4,
    text: "LULC(2011-12)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:lulc2ndcycle",
  },
  {
    id: 5,
    text: "LULC(2015-16)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:lulc3rdcycle",
  },
  // Land Use and Land Cover end

  // Census strat
  {
    id: 6,
    text: "Census",
    show: false,
    class: "Census",
    layer: "analytic:ner_census",
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
    wmsname: "modis_ndvi_visu",
    state: "modis_ndvi",
    wmsname_op:"modis_ndvi",
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
    text: "INSAT Rainfall",
    wmsname: "insat_rain",
    state: "insat_rainfall",
    yearrange: [
      2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
      2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    ],
    show: false,
    operations: [
      { value: "sum", text: "Sum", legend: "" },
      { value: "Mean", text: "Mean", legend: "" },
      { value: "Maximum", text: "Maximum", legend: "" },
    ],
    category: "weather",
  },
  {
    id: 5,
    text: "Air Quality AOD",
    wmsname: "aod",
    state: "aod_date",
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
    state: "lst",
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
    id: 6,
    text: "MODIS NRT FLood",
    wmsname: "modis_water_level",
    state: "modis_water_level",
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
  }
];

// side pannel visibility
export const panelVisibilty = [
  {
    id: "Vegetation",
    text: "Vegetation",
    show: false,
  },
  {
    id: "Layer",
    text: "Layer",
    show: true,
  },
  {
    id: "Weather",
    text: "Weather",
    show: false,
  },
  {
    id: "Satellite_Imagery",
    text: "Satellite_Imagery",
    show: false,
  },
  {
    id: "Vedas_Services",
    text: "Vedas_Services",
    show: false,
  },
  {
    id: "Water_Resources",
    text: "Water_Resources",
    show: false,
  },
];

//list of dates
