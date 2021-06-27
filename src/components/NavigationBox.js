import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setMapBounds } from "../features/maps/mapZoomSlice";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import polyline from '@mapbox/polyline'
var axios = require("axios");

const NavigationBox = () => {
  const dispatch = useDispatch();
  const [suggestions, setsuggestions] = useState([]);
  const [suggestions1, setsuggestions1] = useState([]);

  const [sourcevalue, setSourceValue] = useState();
  const [destvalue, setDestValue] = useState();
  const [showsuggestions, setshowsuggestions] = useState(false);
  const handleClick = (event) => {
    setSourceValue(event);
  };
  const handleClick1 = (event) => {
    setDestValue(event);
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
        console.log(response);
        response.data.suggestions !== undefined
          ? setsuggestions(response.data.suggestions)
          : setsuggestions([]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const suggestLocation1 = (event) => {
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
        console.log(response);
        response.data.suggestions !== undefined
          ? setsuggestions1(response.data.suggestions)
          : setsuggestions1([]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  const navigate = () => {
      var config = {
        method: "get",
        url:"https://apis.mapmyindia.com/advancedmaps/v1/493dfe9d040ca1e0f2c7d1a5c7bc5f5a/route_adv/driving/77.131123,28.552413;17ZUL7?",
        // url:
        //   "https://router.hereapi.com/v8/routes?transportMode=car&origin=26.1445,91.7362&destination=25.6768,91.9270&return=polyline&apiKey=ArsBpOEL5bGUOCLre5UdBeFKCNgahMq1AfywBFhfgY4",
        // //   "?format=json&addressdetails=1&limit=1&polygon_svg=1",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          let poly = response.data.routes[0].geometry;
          let geojson = polyline.toGeoJSON(poly);
          console.log(geojson)
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
          value={sourcevalue}
          onChange={(event) => {
            suggestLocation(event.target.value);
          }}
          
        />
        {showsuggestions &&
          suggestions.map((e) => (
            <li
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
          value={destvalue}
          onChange={(event) => {
            suggestLocation1(event.target.value);
          }}
        />
        {suggestions1.map((e) => (
          <li
            onClick={(event) => {
              handleClick1(event.target.innerHTML);
            }}
          >
            {e.label}
          </li>
        ))}
        <Button
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
  z-index: 100000000;
  width: 5%;
  /* display: flex; */
  top: 0;
  position: absolute;
  background-color: #fff;
  z-index: 10000;
  align-items: center;
  left: 20%;
  padding-right: 10%;
  #Source {
    /* position:absolute; */
    /* left:30%;
  top:0; */
  }

  #Destination {
    /* position:absolute;
  left:60%;
  top:0; */
    position: absolute;
    top: 2rem;
  }
`;
