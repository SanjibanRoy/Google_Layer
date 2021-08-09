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
    minZoom: 10,
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
    layer: "NER_LULC_50K_1st_CYCLE",
    link: "https://www.nesdr.gov.in/igistile/NER_Land_Use_50K_QC_passWS/wms",
    info: "Revenue Circle",
    stats: true,
    clayer: "lege",
    legend:"./legend/lulc1.png",
  },
  {
    id: 5,
    text: "LULC(2011-12)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "NER_LULC_50K_2nd_CYCLE",
    link: "https://www.nesdr.gov.in/igistile/NER_Land_Use_50K_QC_passWS/wms",
    info: "Revenue Circle",
    clayer: "lege",
    legend:"./legend/lulc2.png",
  },
  {
    id: 6,
    text: "LULC(2015-16)",
    show: false,
    class: "Land Use/Land Cover",
    layer: "NER_LULC_50K_3RD_CYCLE",
    link: "https://www.nesdr.gov.in/igistile/NER_Land_Use_50K_QC_passWS/wms",
    info: "Revenue Circle",
    clayer: "lege",
    legend:"./legend/lulc3.png",
  },
  // Land Use and Land Cover end

  // Census strat
  {
    id: 7,
    text: "Census",
    show: false,
    class: "Census",
    layer: "analytic:ner_census",
    link: "https://apps.nesdr.gov.in:442/geoserver/wms",
    legend:
      "https://apps.nesdr.gov.in:442/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=NEC:assam_census",
  },
  {
    id: 8,
    text: "Embankment",
    show: false,
    class: "Flood",
    layer: "NERDRR_NEW:embank",
    link: "https://geoserver.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
  },
  {
    id: 9,
    text: "Breach Locations",
    show: false,
    class: "Flood",
    layer: "NERDRR_NEW:breach_locations",
    link: "https://geoserver.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
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
    info: "This is an inventory of all landslide incidents that have occurred in the NER in 2020 and 2021 (till date). This seasonal landslide inventory is small-medium in scale and archival in nature. The inventory is sourced from Newspapers, Social Media, GSI Reports, SDMA reports and Field Visits. The inventory has a 3-Tier classification for all landslide incidents. Type 1 incidents have accurate geolocation, Type 2 incidents have some degree of locational uncertainty while Type 3 incidents are collapsed/blocked road sections along National/State Highways and other important roads. Those landside incidents which have been verified are mentioned. The preceding '24 hours' rainfall for each landslide is derived from NASA's Global Precipitation Measurement (GPM) mission using the 'NASA/GPM_L3/IMERG_V06' product. If the landslide was fatal in nature then the number of deaths caused are also mentioned.",
    stats: {
      api: "https://api.nesdr.gov.in/nerdrr/landslide.php",
      charttype: "column",
      val: "landslide",
    },
  },
  {
    id: 12,
    text: "Flood Inundation",
    show: false,
    class: "Flood",
    subclass: "Flood",
    // layer: "FLEWS:1august20",
    options: [
      { value: "", text: "Select a date" },
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
      val: "flood",
    },
    layer_date: "",
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

    link: "https://analytics.nesdr.gov.in/nerdrr_lightning/lightning?slide=1",
    options: [
      {
        value: "1",
        text: "11 UTC",
      },
      {
        value: "2",
        text: "12 UTC",
      },
      { value: "3", text: "13 UTC" },
      { value: "4", text: "14 UTC" },
      { value: "5", text: "15 UTC" },
      { value: "6", text: "16 UTC" },
      { value: "7", text: "17 UTC" },
      { value: "8", text: "18 UTC" },
      { value: "9", text: "19 UTC" },
    ],
  },
  {
    id: 15,
    text: "Thunderstorm Probable Index",
    show: false,
    class: "Alerts and Early Warning",
    layer: "NERDRR_NEW:2021_06_15tp1",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    options: [
      {
        value: "NERDRR_NEW:2021_06_15tp1",
        text: "11:30-14:30",
      },
      {
        value: "NERDRR_NEW:2021_06_15tp2",
        text: "14:30-17:30",
      },
      {
        value: "NERDRR_NEW:2021_06_15tp3",
        text: "17:30-12:30",
      },
    ],
  },
  {
    id: 16,
    text: "Earthquake",
    show: false,
    class: "Earthquake/Landslides",
    layer: "NERDRR_NEW:ner_earthquakes",
    zindex:"1000000000000000000",
    link: "https://geoserver.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    stats: {
      api: "https://api.nesdr.gov.in/nerdrr/earthquake.php?district=",
      charttype: "column",
      val: "eq",
    },
  },
  {
    id: 17,
    text: "PulseRad",
    show: false,
    class: "Alerts and Early Warning",
    subclass: "Lightning",
    clayer: "lege",
    link: "https://earthnetworks.azure-api.net/maps/overlays/tile?x={x}&y={y}&z={z}&lid=pulserad&epsg=3857&subscription-key=f9d0c8aa32904e45884cc6f7c34b5e9e",
    legend:"./legend/PulseRad.png"
  },
  {
    id: 18,
    text: "Storm ETA",
    show: false,
    class: "Alerts and Early Warning",
    subclass: "Lightning",
   // layer: "NEWRM:ne_earthquake",
    clayer: "lege",
    link: "https://earthnetworks.azure-api.net/maps/overlays/tile?x={x}&y={y}&z={z}&lid=eta&epsg=3857&subscription-key=f9d0c8aa32904e45884cc6f7c34b5e9e",
    legend:"./legend/StormETA.png"
  },
  {
    id: 19,
    text: "Lightning Alert Polygons",
    show: false,
    class: "Alerts and Early Warning",
    subclass: "Lightning",
    clayer: "lege",
    //layer: "NEWRM:ne_earthquake",
    link: "https://earthnetworks.azure-api.net/maps/overlays/tile?x={x}&y={y}&z={z}&lid=Total.Lightning.Polygons:::1:2:3&epsg=3857&subscription-key=f9d0c8aa32904e45884cc6f7c34b5e9e",
    legend:"./legend/Lightning Alert.png"
  },
  {
    id: 20,
    text: "Lightning Cell Tracks",
    show: false,
    class: "Alerts and Early Warning",
    subclass: "Lightning",
    clayer: "lege",
    //layer: "NEWRM:ne_earthquake",
    link: "https://earthnetworks.azure-api.net/maps/overlays/tile?x={x}&y={y}&z={z}&lid=Cell.Tracks&epsg=3857&subscription-key=f9d0c8aa32904e45884cc6f7c34b5e9e",
    legend:"./legend/CellTrack_new.png"
  },
  {
    id: 21,
    text: "Kharif Crop Damage (Flood)",
    show: false,
    class: "CropDAMS",
    layer: "NERDRR_NEW:cropdam_flood_4326",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    stats: {
      api: "https://api.nesdr.gov.in/nerdrr/cropdamsassam.php?district=",
      apitable:
        "https://api.nesdr.gov.in/nerdrr/datatable.php?state=kharifcropassam",
      charttype: "pie",
      val: "kharifcrop",
    },
    layer_date:'',
  },
  {
    id: 22,
    text: "Forest Fire Vulnerability (Mizoram)",
    show: false,
    class: "Forestry",
    layer: "NERDRR_NEW:mizoram_fire_vul_4326",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    stats: {
      api: "https://api.nesdr.gov.in/nerdrr/firevunalarability.php?state=mizoram&district=",
      apitable: "https://api.nesdr.gov.in/nerdrr/datatable.php?state=mizoram",
      charttype: "pie",
      val: "firev",
    },
    legend:
      "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=NERDRR_NEW:mizoram_fire_vul_4326",
    info: "A forest fire vulnerability map provides information about the likelihood of forest fire in a specific region. The vulnerability of forest fire depends on many factors, the important factors being forest types, forest density, elevation above mean sea level, the slope of the terrain, hill’s aspect, and proximity. This information is useful in the forest fire early warning and is beneficial for decision-making policies of mitigating forest fire. ",
  },
  {
    id: 23,
    text: "Forest Fire Vulnerability (Meghalaya)",
    show: false,
    class: "Forestry",
    layer: "  NERDRR_NEW:megh_fire_vul_4326",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    stats: {
      api: "https://api.nesdr.gov.in/nerdrr/firevunalarability.php?state=meghalaya&district=",
      apitable: "https://api.nesdr.gov.in/nerdrr/datatable.php?state=meghalaya",
      charttype: "pie",
      val: "firev",
    },
    legend:
      "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=NERDRR_NEW:mizoram_fire_vul_4326",
    info: "A forest fire vulnerability map provides information about the likelihood of forest fire in a specific region. The vulnerability of forest fire depends on many factors, the important factors being forest types, forest density, elevation above mean sea level, the slope of the terrain, hill’s aspect, and proximity. This information is useful in the forest fire early warning and is beneficial for decision-making policies of mitigating forest fire. ",
  },
  {
    id: 24,
    text: "Burnt Area NER 2021",
    show: false,
    class: "Forestry",
    layer: "NERDRR_NEW:ner_burnt_area_fixed_4326",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    stats: {
      api: "https://api.nesdr.gov.in/nerdrr/nerburntareastats.php?district=",
      charttype: "column",
      val: "nerburntarea2021",
    },
  },
  {
    id: 25,
    text: "Bankline Change",
    show: false,
    class: "CropDAMS",
    layer: "",
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
    subclass: "cropDAMS",
    layer: "",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    layer_date: "",
    stats: {
      val: "cropyear",
      charttype: "pie",
    },
    options: [
      {
        text: "Select",
      },
      {
        value: "NERDRR_NEW:2005-11-6_districts_cropdam_due_to_bankline_erosion",
        text: "2005-2011",
        api: "https://api.nesdr.gov.in/nerdrr/crop.php?year=2005-2011&district=",
      },
      {
        value: "NERDRR_NEW:2005-15-6_districts_cropdam_due_to_bankline_erosion",
        text: "2005-2015",
        api: "https://api.nesdr.gov.in/nerdrr/crop.php?year=2005-2015&district=",
      },
      {
        value: "NERDRR_NEW:2011-15-6_districts_cropdam_due_to_bankline_erosion",
        text: "2011-2015",
        api: "https://api.nesdr.gov.in/nerdrr/crop.php?year=2011-2015&district=",
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
    info: "LIS DATA (Lightnign Hazards map is prepared by the TRMM- Lightning Imaging Sensor (LIS) available data . The spatial resulution is 0.1 degee X 0.1 degree.",
  },
  {
    id: 28,
    text: "Forest Fire Prone Areas Map",
    show: false,
    class: "Forestry",
    layer: "NERDRR_NEW:ner_forest_fire_prone_area_map",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    stats: {
      api: "https://api.nesdr.gov.in/nerdrr/nerff.php?state=",
      // charttype: "bar",
      val: "nerff",
    },
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
        text: "11:30-14:30",
      },
      {
        value: "NERDRR_NEW:2021_06_15tp2",
        text: "14:30-17:30",
      },
      {
        value: "NERDRR_NEW:2021_06_15tp3",
        text: "17:30-12:30",
      },
    ],
  },
  {
    id: 30,
    text: "WRF Rainfall",
    show: false,
    class: "Alerts and Early Warning",
    subclass: "WRF",
    layer: "",
    link: "https://analytics.nesdr.gov.in/wrf/rain",
    legend:"./legend/lr_new.png",
    clayer: "lege",
    options: [
      {
        value: 1,
        text: "05:30-6:30",
      },
      {
        value: 2,
        text: "06:30-7:30",
      },
      {
        value: 3,
        text: "07:30-8:30",
      },
      {
        value: 4,
        text: "08:30-9:30",
      },
      {
        value: 5,
        text: "09:30-10:30",
      },
      {
        value: 6,
        text: "10:30-11:30",
      },
      {
        value: 7,
        text: "11:30-12:30",
      },
      {
        value: 8,
        text: "12:30-13:30",
      },
      {
        value: 9,
        text: "13:30-14:30",
      },
      {
        value: 10,
        text: "14:30-15:30",
      },
      {
        value: 11,
        text: "15:30-16:30",
      },

      {
        value: 12,
        text: "16:30-17:30",
      },
      {
        value: 13,
        text: "17:30-18:30",
      },
      {
        value: 14,
        text: "19:30-20:30",
      },
      {
        value: 15,
        text: "20:30-21:30",
      },
      {
        value: 16,
        text: "21:30-22:30",
      },
      {
        value: 17,
        text: "22:30-23:30",
      },
      {
        value: 18,
        text: "23:30-00:30",
      },
      {
        value: 19,
        text: "00:30-01:30",
      },
      {
        value: 20,
        text: "01:30-02:30",
      },
      {
        value: 21,
        text: "02:30-03:30",
      },
      {
        value: 22,
        text: "03:30-04:30",
      },
      {
        value: 23,
        text: "04:30-05:30",
      },
      {
        value: 24,
        text: "05:30-6:30",
      },
      {
        value: 25,
        text: "06:30-7:30",
      },
      {
        value: 26,
        text: "07:30-8:30",
      },
      {
        value: 27,
        text: "08:30-9:30",
      },
      {
        value: 28,
        text: "09:30-10:30",
      },
      {
        value: 29,
        text: "10:30-11:30",
      },
      {
        value: 30,
        text: "11:30-12:30",
      },
      {
        value: 31,
        text: "12:30-13:30",
      },
      {
        value: 32,
        text: "13:30-14:30",
      },
      {
        value: 33,
        text: "14:30-15:30",
      },
      {
        value: 34,
        text: "15:30-16:30",
      },

      {
        value: 35,
        text: "16:30-17:30",
      },
      {
        value: 36,
        text: "17:30-18:30",
      },
      {
        value: 37,
        text: "19:30-20:30",
      },
      {
        value: 38,
        text: "20:30-21:30",
      },
      {
        value: 39,
        text: "21:30-22:30",
      },
      {
        value: 40,
        text: "22:30-23:30",
      },
      {
        value: 41,
        text: "23:30-00:30",
      },
      {
        value: 42,
        text: "00:30-01:30",
      },
      {
        value: 43,
        text: "01:30-02:30",
      },
      {
        value: 44,
        text: "02:30-03:30",
      },
      {
        value: 45,
        text: "03:30-04:30",
      },
      {
        value: 46,
        text: "04:30-05:30",
      },
    ],
  },

  {
    id: 31,
    text: "WRF Temperature",
    show: false,
    class: "Alerts and Early Warning",
    subclass: "WRF",
    layer: "",
    link: "https://analytics.nesdr.gov.in/wrf/temperature",
    legend:"./legend/lt_new.png",
    clayer: "lege",
    options: [
      {
        value: 1,
        text: "05:30-6:30",
      },
      {
        value: 2,
        text: "06:30-7:30",
      },
      {
        value: 3,
        text: "07:30-8:30",
      },
      {
        value: 4,
        text: "08:30-9:30",
      },
      {
        value: 5,
        text: "09:30-10:30",
      },
      {
        value: 6,
        text: "10:30-11:30",
      },
      {
        value: 7,
        text: "11:30-12:30",
      },
      {
        value: 8,
        text: "12:30-13:30",
      },
      {
        value: 9,
        text: "13:30-14:30",
      },
      {
        value: 10,
        text: "14:30-15:30",
      },
      {
        value: 11,
        text: "15:30-16:30",
      },

      {
        value: 12,
        text: "16:30-17:30",
      },
      {
        value: 13,
        text: "17:30-18:30",
      },
      {
        value: 14,
        text: "19:30-20:30",
      },
      {
        value: 15,
        text: "20:30-21:30",
      },
      {
        value: 16,
        text: "21:30-22:30",
      },
      {
        value: 17,
        text: "22:30-23:30",
      },
      {
        value: 18,
        text: "23:30-00:30",
      },
      {
        value: 19,
        text: "00:30-01:30",
      },
      {
        value: 20,
        text: "01:30-02:30",
      },
      {
        value: 21,
        text: "02:30-03:30",
      },
      {
        value: 22,
        text: "03:30-04:30",
      },
      {
        value: 23,
        text: "04:30-05:30",
      },
      {
        value: 24,
        text: "05:30-6:30",
      },
      {
        value: 25,
        text: "06:30-7:30",
      },
      {
        value: 26,
        text: "07:30-8:30",
      },
      {
        value: 27,
        text: "08:30-9:30",
      },
      {
        value: 28,
        text: "09:30-10:30",
      },
      {
        value: 29,
        text: "10:30-11:30",
      },
      {
        value: 30,
        text: "11:30-12:30",
      },
      {
        value: 31,
        text: "12:30-13:30",
      },
      {
        value: 32,
        text: "13:30-14:30",
      },
      {
        value: 33,
        text: "14:30-15:30",
      },
      {
        value: 34,
        text: "15:30-16:30",
      },

      {
        value: 35,
        text: "16:30-17:30",
      },
      {
        value: 36,
        text: "17:30-18:30",
      },
      {
        value: 37,
        text: "19:30-20:30",
      },
      {
        value: 38,
        text: "20:30-21:30",
      },
      {
        value: 39,
        text: "21:30-22:30",
      },
      {
        value: 40,
        text: "22:30-23:30",
      },
      {
        value: 41,
        text: "23:30-00:30",
      },
      {
        value: 42,
        text: "00:30-01:30",
      },
      {
        value: 43,
        text: "01:30-02:30",
      },
      {
        value: 44,
        text: "02:30-03:30",
      },
      {
        value: 45,
        text: "03:30-04:30",
      },
      {
        value: 46,
        text: "04:30-05:30",
      },
    ],
  },

  {
    id: 32,
    text: "WRF Relative Humidity",
    show: false,
    class: "Alerts and Early Warning",
    subclass: "WRF",
    layer: "",
    link: "https://analytics.nesdr.gov.in/wrf/rh",
    legend:"./legend/lh_new.png",
    clayer: "lege",
    options: [
      {
        value: 1,
        text: "05:30-6:30",
      },
      {
        value: 2,
        text: "06:30-7:30",
      },
      {
        value: 3,
        text: "07:30-8:30",
      },
      {
        value: 4,
        text: "08:30-9:30",
      },
      {
        value: 5,
        text: "09:30-10:30",
      },
      {
        value: 6,
        text: "10:30-11:30",
      },
      {
        value: 7,
        text: "11:30-12:30",
      },
      {
        value: 8,
        text: "12:30-13:30",
      },
      {
        value: 9,
        text: "13:30-14:30",
      },
      {
        value: 10,
        text: "14:30-15:30",
      },
      {
        value: 11,
        text: "15:30-16:30",
      },

      {
        value: 12,
        text: "16:30-17:30",
      },
      {
        value: 13,
        text: "17:30-18:30",
      },
      {
        value: 14,
        text: "19:30-20:30",
      },
      {
        value: 15,
        text: "20:30-21:30",
      },
      {
        value: 16,
        text: "21:30-22:30",
      },
      {
        value: 17,
        text: "22:30-23:30",
      },
      {
        value: 18,
        text: "23:30-00:30",
      },
      {
        value: 19,
        text: "00:30-01:30",
      },
      {
        value: 20,
        text: "01:30-02:30",
      },
      {
        value: 21,
        text: "02:30-03:30",
      },
      {
        value: 22,
        text: "03:30-04:30",
      },
      {
        value: 23,
        text: "04:30-05:30",
      },
      {
        value: 24,
        text: "05:30-6:30",
      },
      {
        value: 25,
        text: "06:30-7:30",
      },
      {
        value: 26,
        text: "07:30-8:30",
      },
      {
        value: 27,
        text: "08:30-9:30",
      },
      {
        value: 28,
        text: "09:30-10:30",
      },
      {
        value: 29,
        text: "10:30-11:30",
      },
      {
        value: 30,
        text: "11:30-12:30",
      },
      {
        value: 31,
        text: "12:30-13:30",
      },
      {
        value: 32,
        text: "13:30-14:30",
      },
      {
        value: 33,
        text: "14:30-15:30",
      },
      {
        value: 34,
        text: "15:30-16:30",
      },

      {
        value: 35,
        text: "16:30-17:30",
      },
      {
        value: 36,
        text: "17:30-18:30",
      },
      {
        value: 37,
        text: "19:30-20:30",
      },
      {
        value: 38,
        text: "20:30-21:30",
      },
      {
        value: 39,
        text: "21:30-22:30",
      },
      {
        value: 40,
        text: "22:30-23:30",
      },
      {
        value: 41,
        text: "23:30-00:30",
      },
      {
        value: 42,
        text: "00:30-01:30",
      },
      {
        value: 43,
        text: "01:30-02:30",
      },
      {
        value: 44,
        text: "02:30-03:30",
      },
      {
        value: 45,
        text: "03:30-04:30",
      },
      {
        value: 46,
        text: "04:30-05:30",
      },
    ],
  },
  {
    id: 33,
    text: "Recent Earthquakes",
    show: false,
    class: "Alerts and Early Warning",
    subclass: "GeoJSON",
    link: "https://nerdrr.gov.in/tempdbacc/getLastDayEqs.php",
  },
  {id: 34,
    text: "Forest Fire (2021)",
    show: false,
    class: "Forestry",
    layer: "NERDRR_NEW:fp_ner_2021",
    link: "https://geoserver.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms?",
  },
  {
    id: 35,
    text: "Forest Fire NER District",
    show: false,
    class: "Forestry",
    layer: "NERDRR_NEW:fp_ner_dist_clipped",
    link: "https://apps.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
  },
  {
    id: 36,
    text: "Cloudbrust/Heavy Rain",
    show: false,
    class: "Alerts and Early Warning",
    subclass: "GeoJSONe",
    api:"external",
    //link: "./data.json",
    link: "https://www.mosdac.gov.in/live/backend/rain_cloudburst.php",
  },
];

// maps configuration
export const maps = [
  //maps start
  {
    id: 1,
    text: "Mapbox Light",
    show: false,
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
    link: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    format: "image/png",
    type: "tile",
    image: "osm.png",
  },
  
  {
    id: 6,
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
    id: 7,
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
  {
    id: 8,
    text: "Terrain",
    show: false,
    class: "Maps",
    layer: "ace2dem",
    link: "https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
    format: "image/png",
    type: "tile",
    // domain: ["mt0", "mt1", "mt2", "mt3"],
    image: "terrain.png",
  },{
    id: 9,
    text: "Carto DEM",
    show: true,
    class: "Maps",
    layer: "NEWRM:CARTO_DEM",
    link: "http://geoserver.vassarlabs.com/geoserver/NEWRM/gwc/service/wms",
    format: "image/png",
    // domain: ["mt0", "mt1", "mt2", "mt3"],
    image: "terrain.png",   
  }
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
      { value: "NDVI", text: "NDVI" },
      { value: "NDWI", text: "NDWI" },
      { value: "NBR", text: "NBR" },
      { value: "Deforestation", text: "Deforestation" },
      { value: "Fire Detection Index", text: "Fire Detection Index" },
      { value: "EVI", text: "EVI" },
      { value: "Custom", text: "Custom" },
    ],
    category: "Satellite",
  },
];

//list of dates
