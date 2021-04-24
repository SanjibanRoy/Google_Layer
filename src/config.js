
export const layer = [
  //Administrator boundary start
  {
    id: 1,
    text: "State Boundary",
    show: false,
    class: "Administrator",
    layer: "NEC:ner_states"
  },
  {
    id: 2,
    text: "District Boundary",
    show: false,
    class: "Administrator",
    layer: "analytic:ner_boundary"
  },
  // Administrator boundary end

  // Land Use and Land Cover Start
  {
    id: 3,
    text: "LULC (2005-06)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:ner_landuse_landcover_50k_1st_cycle"
  },
  {
    id: 4,
    text: "LULC(2011-12)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:lulc2ndcycle"
  },
  {
    id: 5,
    text: "LULC(2015-16)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "analytic:lulc3rdcycle"
  },
  // Land Use and Land Cover end

  // Census strat
  {
    id: 6,
    text: "Census",
    show: false,
    class: "Census",
    layer: "analytic:ner_census"
  },

  // census end



]

// maps configuration
export const maps = [

  //maps start 
  {
    id: 'Cartodb',
    text: "Cartodb",
    show: false,
    class: "Maps",
    layer: "analytic:ner_boundary",
    link: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    format: 'image/png',
    domain: " "
  },
  {
    id: 'Bhuvan',
    text: "Bhuvan",
    show: false,
    class: "Maps",
    layer: "india3",
    link: "https://bhuvan-vec1.nrsc.gov.in/bhuvan/gwc/service/wms/",
    format: 'image/png',
    domain: " "

  }
  ,
  {
    id: 'BhuvanSatellite',
    text: "BhuvanSatellite",
    show: false,
    class: "Maps",
    layer: "bhuvan_imagery2",
    link: "https://bhuvan-ras2.nrsc.gov.in/tilecache/tilecache.py?",
    format: 'png/jpeg',
    domain: " "
  }
  ,
  {
    id: 'Open_Street',
    text: "Open Street",
    show: false,
    class: "Maps",
    layer: "bhuvan_imagery2",
    link: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    format: 'png/jpeg',
    domain: " "
  }
  ,
  {
    id: 'Google_Map',
    text: "Google Map",
    show: false,
    class: "Maps",
    layer: "analytic:ner_boundary",
    link: "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    format: 'image/png',
    domain: "['mt0','mt1','mt2','mt3']"
  }
  ,
  {
    id: 'Google_Satellite',
    text: "Google Satellite",
    show: false,
    class: "Maps",
    layer: "analytic:ner_boundary",
    link: "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    format: 'image/png',
    domain: ['mt0', 'mt1', 'mt2', 'mt3']
  }
  //maps end

]

// analytics layer
export const analytics = [

  {
    id: 2,
    text: "District Boundary",
    show: false,
    class: "Admin",
    layer: "analytic:ner_boundary"
  },
  {
    id: 3,
    text: "Land Use",
    show: false,
    class: "Natural Resource",
    layer: "analytic:ner_boundary"
  },
  {
    id: 4,
    text: "Wetlands",
    show: false,
    class: "Natural Resource",
    layer: "analytic:ner_boundary"
  },
  {
    id: 5,
    text: "Agriculture",
    show: false,
    class: "Agri",
    layer: "analytic:ner_boundary"
  },
  {
    id: 6,
    text: "Cropland",
    show: false,
    class: "Agri",
    layer: "analytic:ner_boundary"
  },
  {
    id: 7,
    text: "Disaster",
    show: false,
    class: "Disaster",
    layer: "analytic:ner_boundary"
  }
]

// side pannel visibility
export const panelVisibilty = [

  {
    id: "Vegetation",
    text: "Vegetation",
    show: false
  },
  {
    id: "Layer",
    text: "Layer",
    show: true
  },
  {
    id: "Weather",
    text: "Weather",
    show: false
  },
  {
    id: "Satellite_Imagery",
    text: "Satellite_Imagery",
    show: false
  },
  {
    id: "Vedas_Services",
    text: "Vedas_Services",
    show: false
  },
  {
    id: "Water_Resources",
    text: "Water_Resources",
    show: false
  }
]

//list of dates

export const flavourOptions = [
  { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
  { value: 'chocolate', label: 'Chocolate', rating: 'good' },
  { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
  { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
];
