import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  setMapBounds,
  selectMapZoomstate,
} from "../features/maps/mapZoomSlice";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import polyline from "@mapbox/polyline";
var axios = require("axios");

const ProximityTool = () => {
  const dispatch = useDispatch();
  const [suggestions, setsuggestions] = useState([]);
  const [suggestions1, setsuggestions1] = useState([]);

  const [sourcevalue, setSourceValue] = useState();
  const [destvalue, setDestValue] = useState();
  const [source, setSource] = useState([]);
  const epicenter = useSelector(selectMapZoomstate);

  const [villages, setVillages] = useState()

  console.log(epicenter)
  useEffect(()=>{
    console.log(epicenter)
    setSourceValue([epicenter.lat,epicenter.lon])
    setDestValue(epicenter.radius)
  },[epicenter])

  useEffect(()=>{
    console.log(villages)

  },[villages])

  const navigate = () => {
    console.log(source);
    var config = {
      method: "get",
      url:
        "https://api.nesdr.gov.in/nerdrr/village.php?lat="+sourcevalue[0]+"&lon="+sourcevalue[1]+"&distance="+destvalue/1000,
      // url:
      //   "https://router.hereapi.com/v8/routes?transportMode=car&origin=26.1445,91.7362&destination=25.6768,91.9270&return=polyline&apiKey=ArsBpOEL5bGUOCLre5UdBeFKCNgahMq1AfywBFhfgY4",
      // //   "?format=json&addressdetails=1&limit=1&polygon_svg=1",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // let poly = response.data.routes[0].geometry;
        // let geojson = polyline.toGeoJSON(poly);
        console.log(response);
        let villages         = (response.data.map((e)=>({"name":e.name,"tot_p":e.tot_p, "lat":e.ycoord, "lng":e.xcoord,})))
        setVillages(villages)
        dispatch(
          setMapBounds({
            // lat:"22",
            // lon:"22",
            villages: villages,
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
    // setshowsuggestions(false);
  };

  return (
    <>
      <Search>
        <input
          id="Destination"
          className="input"
          placeholder="Epicenter..."
           value={sourcevalue!==null?sourcevalue:""}
        />

        <input
          id="Source"
          type="number"
          className="input"
          placeholder="BufferDistance"
          min={0}
          max={10}
          value={destvalue!==null?destvalue:""}
        />

        <Button
          className="Button"
          onClick={() => {
            navigate();
          }}
        >
          Submit
        </Button>
      </Search>
    </>
  );
};

export default ProximityTool;

const Search = styled.div`
  .input {
    border: 1px solid #555;
    border-radius: 4px;
    box-shadow: none;
    font-size: 12px;
    font-weight: 400;
    /* width: 5000px; */
    display: block;
    width: 70%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 40px;
    margin-right: 10px;
  }
  .Button {
    display: flex;
    align-items: center;
    background-color: orange;
    margin-left: 2em;
    margin-right: 5em;
    width: 75%;
  }
  .Locations {
    list-style: none;

    background-color: #fff;
    width: 70%;
    height: 2.5rem;
    padding: 6px 12px;
    margin-left: 40px;
    margin-right: 10px;
    font-size: 14px;
  }
  .Locations:hover {
    background-color: grey;
    border-left: 2px solid orange;
  }
`;
