export const layer = [
  //Administrator boundary start
  {
    id: 1,
    text: "State Boundary",
    show: true,
    class: "Administrative",
    layer: "NEC:ner_states",

    link: "https://apps.nesdr.gov.in:442/geoserver/wms"
  },
  {
    id: 2,
    text: "District Boundary",
    show: false,
    class: "Administrative",
    layer: "analytic:ner_boundary",
    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
    info: "District Boundary",
    attributes: [
      { value: "dtname", text: "District Name" },
      { value: "area", text: "Area" },
      // { value: "diff", text: "Change"},
    ],
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
    stats: true
  },
  {
    id: 5,
    text: "LULC(2011-12)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:lulc2ndcycle",
    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
    info: "Revenue Circle",
  },
  {
    id: 6,
    text: "LULC(2015-16)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:lulc3rdcycle",
    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
    info: "LULC(2015-16)",
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
  },
  {
    id: 8,
    text: "Embankment",
    show: false,
    class: "Disaster Mitigation",
    layer: "NEWRM:ne_embankments",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  {
    id: 9,
    text: "Breach Locations",
    show: false,
    class: "Disaster Mitigation",
    layer: "NEWRM:ne_breach_total_locations",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  {
    id: 10,
    text: "Erosion Deposition",
    show: false,
    class: "Disaster Mitigation",
    layer: "NEWRM:NE_ErosionDeposition",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  {
    id: 11,
    text: "Landslide",
    show: false,
    class: "Disaster Mitigation",
    layer: "disaster:AS_SLIM_2014_GCS",
    link: "https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",
  },
  {
    id: 12,
    text: "Flood Inundation",
    show: false,
    class: "Disaster Mitigation",
    layer: "FLEWS:1august20",
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
      api:"https://api.nesdr.gov.in/nerdrr/flood.php?district=",
      charttype:"column"
    },
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
    class: "Disaster Mitigation",
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
    text: "Flood Hazard",
    show: false,
    class: "Disaster Mitigation",
    layer: "as_hz",
    link: "https://bhuvan-ras2.nrsc.gov.in/mapcache",
  },
  {
    id: 22,
    text: "Forest Hazard",
    show: false,
    class: "Disaster Mitigation",
    layer: "as_hz",
    link: "https://analytics.nesdr.gov.in/forest_fire/visu?date=1",
  },
  {
    id: 23,
    text: "Crop DAMS",
    show: false,
    class: "Disaster Mitigation",
    layer: "as_hz",
    link: "https://analytics.nesdr.gov.in/nerdrr_sentinel_1/visu?band=1",
  },
  // census end
];


export const Flood = [
  //Administrator boundary start
  {
    id: 1,
    text: "State Boundary",
    show: true,
    class: "Administrative",
    layer: "NEC:ner_states",

    link: "https://apps.nesdr.gov.in:442/geoserver/wms"
  },
  {
    id: 2,
    text: "District Boundary",
    show: false,
    class: "Administrative",
    layer: "analytic:ner_boundary",
    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
    info: "District Boundary",
    attributes: [
      { value: "dtname", text: "District Name" },
      { value: "area", text: "Area" },
      // { value: "diff", text: "Change"},
    ],
    stats: {
      api:"",
      charttype:"column"
    }

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
    stats: true
  },
  {
    id: 5,
    text: "LULC(2011-12)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:lulc2ndcycle",
    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
    info: "Revenue Circle",
  },
  {
    id: 6,
    text: "LULC(2015-16)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:lulc3rdcycle",
    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
    info: "LULC(2015-16)",
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
  },
  {
    id: 8,
    text: "Embankment",
    show: false,
    class: "Disaster Mitigation",
    layer: "NEWRM:ne_embankments",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  {
    id: 9,
    text: "Breach Locations",
    show: false,
    class: "Disaster Mitigation",
    layer: "NEWRM:ne_breach_total_locations",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  {
    id: 10,
    text: "Erosion Deposition",
    show: false,
    class: "Disaster Mitigation",
    layer: "NEWRM:NE_ErosionDeposition",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  },
  {
    id: 11,
    text: "Landslide",
    show: false,
    class: "Disaster Mitigation",
    layer: "disaster:AS_SLIM_2014_GCS",
    link: "https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",
  },
  {
    id: 12,
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
    id: 13,
    text: "Flood Alerts",
    show: false,
    class: "Alerts and Early Warning",
    layer: "FLEWS:assam_rc_utm",
    link: "https://apps.nesdr.gov.in:442/geoserver/FLEWS/wms",
  },
  {
    id: 14,
    text: "Flood Hazard",
    show: false,
    class: "Disaster Mitigation",
    layer: "as_hz",
    link: "https://bhuvan-ras2.nrsc.gov.in/mapcache",
  },
  {
    id: 16,
    text: "Earthquake",
    show: false,
    class: "Disaster Mitigation",
    layer: "NEWRM:ne_earthquake",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
  }
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
  //maps end
];

export const apps =[
  {
    id:1,
    app:"GeoPortal",
    show:true
  },
  {
    id:2,
    app:"Flood",
    show:false
  },
  {
    id:3,
    app:"Agriculture",
    show:false
  },
  {
    id:4,
    app:"Atmospheric Sciences",
    show:false
  },
  {
    id:5,
    app:"Geosciences",
    show:false
  },
]

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
    id: "Water_Resources",
    text: "Water_Resources",
    show: false,
    panel: false,
  },
];

//list of dates
