import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setMapBounds } from "../features/maps/mapZoomSlice";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import polyline from "@mapbox/polyline";
var axios = require("axios");

const NavigationBox = () => {
  const dispatch = useDispatch();
  const [suggestions, setsuggestions] = useState([]);
  const [suggestions1, setsuggestions1] = useState([]);

  const [sourcevalue, setSourceValue] = useState();
  const [destvalue, setDestValue] = useState();
  const [showsuggestions, setshowsuggestions] = useState(false);
  const [showsuggestions1, setshowsuggestions1] = useState(false);
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);

  const handleClick = (event) => {
    setSourceValue(event);
    searchLocation(event);
    setshowsuggestions(false);
  };
  const handleClick1 = (event) => {
    setDestValue(event);
    searchLocation1(event);
    setshowsuggestions1(false);
  };
  const suggestLocation = (event) => {
    setshowsuggestions(true);
    // setvalue(event);
    var config = {
      method: "get",
      url:
        "https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=ArsBpOEL5bGUOCLre5UdBeFKCNgahMq1AfywBFhfgY4&query=" +
        event,
      // url: 'https://nominatim.openstreetmap.org/search/'+event+'?format=json&addressdetails=1&limit=1&polygon_svg=1',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        response.data.suggestions !== undefined
          ? setsuggestions(response.data.suggestions)
          : setsuggestions([]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const suggestLocation1 = (event) => {
    setshowsuggestions1(true);
    // setvalue(event);
    var config = {
      method: "get",
      url:
        "https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=ArsBpOEL5bGUOCLre5UdBeFKCNgahMq1AfywBFhfgY4&query=" +
        event,
      // url: 'https://nominatim.openstreetmap.org/search/'+event+'?format=json&addressdetails=1&limit=1&polygon_svg=1',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        response.data.suggestions !== undefined
          ? setsuggestions1(response.data.suggestions)
          : setsuggestions1([]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const searchLocation1 = (event) => {
    var config = {
      method: "get",

      url:
        "https://geocode.search.hereapi.com/v1/geocode?apiKey=ArsBpOEL5bGUOCLre5UdBeFKCNgahMq1AfywBFhfgY4&q=" +
        event,
      //   "?format=json&addressdetails=1&limit=1&polygon_svg=1",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        setSource([
          response.data.items[0].position.lat,
          response.data.items[0].position.lng,
        ]);
      })
      .catch(function (error) {
        console.log(error);
      });
    // setshowsuggestions(false);
  };
  const searchLocation = (event) => {
    var config = {
      method: "get",

      url:
        "https://geocode.search.hereapi.com/v1/geocode?apiKey=ArsBpOEL5bGUOCLre5UdBeFKCNgahMq1AfywBFhfgY4&q=" +
        event,
      //   "?format=json&addressdetails=1&limit=1&polygon_svg=1",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.items[0].position.lat);
        setDestination([
          response.data.items[0].position.lat,
          response.data.items[0].position.lng,
        ]);

      })
      .catch(function (error) {
        console.log(error);
      });
    // setshowsuggestions(false);
  };
  const navigate = () => {
    dispatch(
      setMapBounds({
        // lat:"22",
        // lon:"22",
        path: "",
      })
    )
    console.log(source);
    var config = {
      method: "get",
      url:
        "https://apis.mapmyindia.com/advancedmaps/v1/493dfe9d040ca1e0f2c7d1a5c7bc5f5a/route_adv/driving/" +
        source[1] +
        "," +
        source[0] +
        ";" +
        destination[1] +
        "," +
        destination[0],
      // url:
      //   "https://router.hereapi.com/v8/routes?transportMode=car&origin=26.1445,91.7362&destination=25.6768,91.9270&return=polyline&apiKey=ArsBpOEL5bGUOCLre5UdBeFKCNgahMq1AfywBFhfgY4",
      // //   "?format=json&addressdetails=1&limit=1&polygon_svg=1",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        let poly = response.data.routes[0].geometry;
        let geojson = polyline.toGeoJSON(poly);
        console.log(geojson);
        // let box = response.data.items[0].mapView;

        dispatch(
          setMapBounds({
            // lat:"22",
            // lon:"22",
            path: geojson,
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
    setshowsuggestions(false);
  };

  return (
    <>
      <Search>
        <input
          id="Destination"
          className="input"
          placeholder="Source..."
          // value={sourcevalue}
          onChange={(event) => {
            suggestLocation(event.target.value);
          }}
        />
        {showsuggestions &&
          suggestions.map((e) => (
            <li
              className="Locations"
              onClick={(event) => {
                handleClick(event.target.innerHTML);
              }}
            >
              {e.label}
            </li>
          ))}
      </Search>
      <Search>
        <input
          id="Source"
          className="input"
          placeholder="Destination..."
          // value={destvalue}
          onChange={(event) => {
            suggestLocation1(event.target.value);
          }}
        />
        {showsuggestions1 &&
          suggestions1.map((e) => (
            <li
              className="Locations"
              onClick={(event) => {
                handleClick1(event.target.innerHTML);
              }}
            >
              {e.label}
            </li>
          ))}
        <Button
          className="Button"
          onClick={() => {
            navigate();
          }}
        >
          Navigate
        </Button>
      </Search>
    </>
  );
};

export default NavigationBox;

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
