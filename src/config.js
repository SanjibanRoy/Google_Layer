import { FolderOpenRounded } from "@material-ui/icons";

export const layer = [
  //Administrator boundary start
  {
    id: 1,
    text: "State Boundary",
    show: true,
    class: "Administrative",
    layer: "NEC:ner_states",

    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
  },
  {
    id: 2,
    text: "District Boundary",
    show: true,
    class: "Administrative",
    layer: "analytic:ner_boundary",
    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
    info: "District Boundary",
    attributes: [
      { value: "dtname", text: "District Name" },
      { value: "area", text: "Area" },
      // { value: "diff", text: "Change"},
    ],
    minZoom:10
    // stats: {
    //   api:"https://apps.nesdr.gov.in/nerdrrapi/flood.php?district=",
    //   charttype:"column"
    // }
  },
  {
    id: 3,
    text: "Revenue Circle",
    show: false,
    class: "Administrative",
    layer: "NEC:assam_dist",
    link: "https://apps.nesdr.gov.in:442/geoserver/NEC/wms",
    info: "Revenue Circle",
    attributes: [
      { value: "dtname", text: "District Name" },
      { value: "area", text: "Area" },
      // { value: "diff", text: "Change"},
    ],
  },
  // Administrator boundary end

  // Land Use and Land Cover Start
  {
    id: 4,
    text: "LULC (2005-06)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:ner_landuse_landcover_50k_1st_cycle",
    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
    info: "Revenue Circle",
    stats: true,
    legend:"https://apps.nesdr.gov.in:442/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=analytic:ner_landuse_landcover_50k_1st_cycle"
  },
  {
    id: 5,
    text: "LULC(2011-12)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:lulc2ndcycle",
    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
    info: "Revenue Circle",
    legend:"https://apps.nesdr.gov.in:442/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=analytic:lulc2ndcycle"

  },
  {
    id: 6,
    text: "LULC(2015-16)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:lulc3rdcycle",
    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
    info: "LULC(2015-16)",
    legend:"https://apps.nesdr.gov.in:442/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=analytic:lulc3rdcycle"

  },
  // Land Use and Land Cover end

  // Census strat
  {
    id: 7,
    text: "Census",
    show: false,
    class: "Census",
    layer: "NEC:assam_census",
    link: "https://apps.nesdr.gov.in:442/geoserver/NEC/wms",
    legend:"https://apps.nesdr.gov.in:442/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=NEC:assam_census"

  },
  {
    id: 8,
    text: "Embankment",
    show: false,
    class: "Flood",
    layer: "NEWRM:ne_embankments",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  {
    id: 9,
    text: "Breach Locations",
    show: false,
    class: "Flood",
    layer: "NEWRM:ne_breach_total_locations",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  {
    id: 10,
    text: "Erosion Deposition",
    show: false,
    class: "Flood",
    layer: "NEWRM:NE_ErosionDeposition",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  {
    id: 11,
    text: "Landslide",
    show: false,
    class: "Earthquake/Landslides",
    layer: "NERDRR_NEW:ladslide_points",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    info:"This is an inventory of all landslide incidents that have occurred in the NER in 2020 and 2021 (till date). This seasonal landslide inventory is small-medium in scale and archival in nature. The inventory is sourced from Newspapers, Social Media, GSI Reports, SDMA reports and Field Visits. The inventory has a 3-Tier classification for all landslide incidents. Type 1 incidents have accurate geolocation, Type 2 incidents have some degree of locational uncertainty while Type 3 incidents are collapsed/blocked road sections along National/State Highways and other important roads. Those landside incidents which have been verified are mentioned. The preceding '24 hours' rainfall for each landslide is derived from NASA's Global Precipitation Measurement (GPM) mission using the 'NASA/GPM_L3/IMERG_V06' product. If the landslide was fatal in nature then the number of deaths caused are also mentioned."
  },
  {
    id: 12,
    text: "Flood Inundation",
    show: false,
    class: "Flood",
    // layer: "FLEWS:1august20",
    options: [
      { value: "FLEWS:1august20", text: "1 August 2020" },
      { value: "FLEWS:8july2020", text: "8 July 2020" },
      { value: "FLEWS:25july2020", text: "25 July 2020" },
      { value: "FLEWS:22july2020", text: "22 July 2020" },
      { value: "FLEWS:19_july", text: "19 July 2020" },
      { value: "FLEWS:17July", text: "17 July 2020" },
      { value: "FLEWS:16_july", text: "16 July 2020" },
      { value: "FLEWS:10july2020", text: "10 July 2020" },
      { value: "FLEWS:3july2020", text: "3 July 2020" },
      { value: "FLEWS:onejuly", text: "1 July 2020" },
      { value: "FLEWS:28june2020", text: "28 June 2020" },
      { value: "FLEWS:26june2020", text: "26 June 2020" },
      { value: "FLEWS:24june20", text: "24 June 2020" },
      { value: "FLEWS:21june", text: "21 June 2020" },
      { value: "FLEWS:2june", text: "2 June 2020" },
      { value: "FLEWS:may28", text: "28 May 2020" },
    ],
    stats: {
      api: "https://api.nesdr.gov.in/nerdrr/flood.php?district=",
      charttype: "column",
      val:"flood",
    },
    layer_date:'',
    link: "https://apps.nesdr.gov.in:442/geoserver/FLEWS/wms",
  },
  {
    id: 13,
    text: "Flood Alerts",
    show: false,
    class: "Alerts and Early Warning",
    layer: "FLEWS:assam_rc_utm",
    link: "https://apps.nesdr.gov.in:442/geoserver/FLEWS/wms",
  },
  {
    id: 14,
    text: "Lightning Alerts",
    show: false,
    class: "Alerts and Early Warning",
    layer: "FLEWS:1august20",

    link: "https://apps.nesdr.gov.in:442/geoserver/FLEWS/wms",
  },
  {
    id: 15,
    text: "Thunderstorm",
    show: false,
    class: "Alerts and Early Warning",
    layer: "FLEWS:1august20",
    link: "https://apps.nesdr.gov.in:442/geoserver/FLEWS/wms",
  },
  {
    id: 16,
    text: "Earthquake",
    show: false,
    class: "Earthquake/Landslides",
    layer: "NEWRM:ne_earthquake",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  {
    id: 17,
    text: "PulseRad",
    show: false,
    class: "Lightning",
    layer: "NEWRM:ne_earthquake",
    link: "https://earthnetworks.azure-api.net/maps/overlays/tile?x={x}&y={y}&z={z}&lid=pulserad&epsg=3857&subscription-key=f9d0c8aa32904e45884cc6f7c34b5e9e",
  },
  {
    id: 18,
    text: "Storm ETA",
    show: false,
    class: "Lightning",
    layer: "NEWRM:ne_earthquake",
    link: "https://earthnetworks.azure-api.net/maps/overlays/tile?x={x}&y={y}&z={z}&lid=eta&epsg=3857&subscription-key=f9d0c8aa32904e45884cc6f7c34b5e9e",
  },
  {
    id: 19,
    text: "Lightning Alert Polygons",
    show: false,
    class: "Lightning",
    layer: "NEWRM:ne_earthquake",
    link: "https://earthnetworks.azure-api.net/maps/overlays/tile?x={x}&y={y}&z={z}&lid=Total.Lightning.Polygons:::1:2:3&epsg=3857&subscription-key=f9d0c8aa32904e45884cc6f7c34b5e9e",
  },
  {
    id: 20,
    text: "Lightning Cell Tracks",
    show: false,
    class: "Lightning",
    layer: "NEWRM:ne_earthquake",
    link: "https://earthnetworks.azure-api.net/maps/overlays/tile?x={x}&y={y}&z={z}&lid=Cell.Tracks&epsg=3857&subscription-key=f9d0c8aa32904e45884cc6f7c34b5e9e",
  },
  {
    id: 21,
    text: "Kharif Crop Damage (Flood)",
    show: false,
    class: "CropDAMS",
    layer: "NERDRR_NEW:cropdam_flood_4326",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    legend:"https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=NERDRR_NEW:cropdam_flood_4326"

  },
  {
    id: 22,
    text: "Forest Fire Vunalarability (Mizoram)",
    show: false,
    class: "Forestry",
    layer: "NERDRR_NEW:mizoram_fire_vul_4326",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    stats: {
      api: "https://api.nesdr.gov.in/nerdrr/firevunalarability.php?state=mizoram&district=",
      apitable: "https://api.nesdr.gov.in/nerdrr/datatable.php?state=mizoram",
      charttype: "pie",
      val:"firev",
    },
    legend:"https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=NERDRR_NEW:mizoram_fire_vul_4326",
    info:"A forest fire vulnerability map provides information about the likelihood of forest fire in a specific region. The vulnerability of forest fire depends on many factors, the important factors being forest types, forest density, elevation above mean sea level, the slope of the terrain, hill’s aspect, and proximity. This information is useful in the forest fire early warning and is beneficial for decision-making policies of mitigating forest fire. "
  },
  {
    id: 23,
    text: "Forest Fire Vunalarability (Meghalaya)",
    show: false,
    class: "Forestry",
    layer: "  NERDRR_NEW:megh_fire_vul_4326",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    stats: {
      api: "https://api.nesdr.gov.in/nerdrr/firevunalarability.php?state=meghalaya&district=",
      apitable: "https://api.nesdr.gov.in/nerdrr/datatable.php?state=meghalaya",
      charttype: "pie",
      val:"firev",
    },
    legend:"https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=NERDRR_NEW:mizoram_fire_vul_4326",
    info:"A forest fire vulnerability map provides information about the likelihood of forest fire in a specific region. The vulnerability of forest fire depends on many factors, the important factors being forest types, forest density, elevation above mean sea level, the slope of the terrain, hill’s aspect, and proximity. This information is useful in the forest fire early warning and is beneficial for decision-making policies of mitigating forest fire. "
  },
  {
    id: 24,
    text: "Burn Patches",
    show: false,
    class: "Forestry",
    layer: "NERDRR_NEW:churachandpur_patchwise_4326",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
  },
  {
    id: 25,
    text: "Bankline Change",
    show: false,
    class: "CropDAMS",
    layer: "NERDRR_NEW:2015_streamline_4326",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    options: [
      {
        value: "NERDRR_NEW:2015_streamline_4326",
        text: "2015",
      },
      {
        value: "NERDRR_NEW:2011_streamline_4326",
        text: "2011",
      },
      {
        value: "NERDRR_NEW:2005_streamline_4326",
        text: "2005",
      },
      	
    ],
  },
  {
    id: 26,
    text: "Crop Damage (River Bank Erosion)",
    show: false,
    class: "CropDAMS",
    layer: "NERDRR_NEW:2005-11-6_districts_cropdam_due_to_bankline_erosion",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    layer_date:'',
    stats: {
      val:"cropyear",
    },
    options: [
      {
        value: "NERDRR_NEW:2005-11-6_districts_cropdam_due_to_bankline_erosion",
        text: "2005-2011",
        api: "https://api.nesdr.gov.in/nerdrr/crop.php?year=2005-2011&district=",
        charttype: "column",
      },
      {
        value: "NERDRR_NEW:2005-15-6_districts_cropdam_due_to_bankline_erosion",
        text: "2005-2015",
        api: "https://api.nesdr.gov.in/nerdrr/crop.php?year=2005-2015&district=",
        charttype: "column",
      },
      {
        value: "NERDRR_NEW:2011-15-6_districts_cropdam_due_to_bankline_erosion",
        text: "2011-2015",
        api: "https://api.nesdr.gov.in/nerdrr/crop.php?year=2011-2015&district=",
        charttype: "column",
      },
      	
    ],
  },
  {
    id: 27,
    text: "Lightning Hazard Map",
    show: false,
    class: "Lightning",
    layer: "NERDRR_NEW:Light_Hazards_Map",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    info:"LIS DATA (Lightnign Hazards map is prepared by the TRMM- Lightning Imaging Sensor (LIS) available data . The spatial resulution is 0.1 degee X 0.1 degree."
  },

  {
    id: 28,
    text: "Forest Vulnarability Map",
    show: false,
    class: "Forestry",
    layer: "NERDRR_NEW:ner_forest_fire_prone_area_map",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
  },
  {
    id: 29,
    text: "Thunderstorm Probable Index",
    show: false,
    class: "Lightning",
    layer: "NERDRR_NEW:2021_06_15tp1",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    options: [
      {
        value: "NERDRR_NEW:2021_06_15tp1",
        text: "2005-2011",
      },
      {
        value: "NERDRR_NEW:2021_06_15tp2",
        text: "2005-2015",
      },
      {
        value: "NERDRR_NEW:2021_06_15tp3",
        text: "2011-2015",
      }]
  },
  // {
  //   id: 29,
  //   text: "Landslide",
  //   show: false,
  //   class: "Forestry",
  //   layer: "NERDRR_NEW:ladslide_points",
  //   link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
  // },
  // census end
];

// maps configuration
export const maps = [
  //maps start
  {
    id: 1,
    text: "Mapbox Light",
    show: true,
    class: "Maps",
    layer: "analytic:ner_boundary",
    link: "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGluZXNoa2N1YmUiLCJhIjoiY2p2Z2Jzc3pyMDVwajN5bWowdjA1YTAyMSJ9.TcJaEwi-qTQqBPqTh0Kt2g",
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
  {
    id: 7,
    text: " Satellite",
    show: false,
    class: "Maps",
    layer: "analytic:ner_boundary",
    link: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    format: "image/png",
    // domain: ["mt0", "mt1", "mt2", "mt3"],
    image: "google.png",
  },
  {
    id: 8,
    text: " Map My India",
    show: false,
    class: "Maps",
    layer: "analytic:ner_boundary",
    link: "https://mt3.mapmyindia.com/advancedmaps/v1/493dfe9d040ca1e0f2c7d1a5c7bc5f5a/base_hybrid/{z}/{x}/{y}.png",
    format: "image/png",
    // domain: ["mt0", "mt1", "mt2", "mt3"],
    type: "tile",
    image: "google.png",
  },
  //maps end
];

export const apps = [
  {
    id: 1,
    app: "GeoPortal",
    show: true,
  },
  {
    id: 2,
    app: "Flood",
    show: false,
  },
  {
    id: 3,
    app: "Agriculture",
    show: false,
  },
  {
    id: 4,
    app: "Atmospheric Sciences",
    show: false,
  },
  {
    id: 5,
    app: "Geosciences",
    show: false,
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
    id: "Legend",
    show: false,
    panel: false,
  },
  {
    id: "Stats",
    show: false,
    panel: false,
  },
  {
    id: "Tools",
    show: false,
    panel: false,
  },
  {
    id: "Apps",
    show: false,
    panel: false,
  },
  {
    id: "Search",
    show: false,
    panel: false,
  },
];


// analytics layer
export const analyticoper = [
  {
    id: 2,
    text: "modisndvi",
    wmsname: "modis_ndvi",
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
    wmsname_op:"soil",

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
    wmsname_op:"et",

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
    wmsname_op:"insat_rain",

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
    wmsname_op:"aod",

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
    wmsname_op:"lst",

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
    wmsname_op: "modis_flood",
    yearrange: [
      2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
      2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    ],
    show: false,
    operations: [
      { value: "min", text: "Minimum", legend: "" },
      { value: "mean", text: "Mean", legend: "" },
      { value: "max", text: "Maximum", legend: "" },
      { value: "range", text: "Flood Statistical Analysis", legend: "" },

    ],
    category: "weather",
  },
  {
    id: 6,
    text: "Sentinel",
    wmsname: "sentinal",
    state: "sentinal",
    show: false,
    operations: [
      { value: "NDVI", text: "NDVI"},
      { value: "NDWI", text: "NDWI" },
      { value: "NBR" , text: "NBR"},
      { value: "Deforestation", text: "Deforestation"},
      { value: "Fire Detection Index", text: "Fire Detection Index" },
      { value: "EVI", text: "EVI"},
      { value: "Custom", text: "Custom"}
    ],
    category: "Satellite",
  }
];

//list of dates
