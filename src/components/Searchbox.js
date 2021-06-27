import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setMapBounds } from "../features/maps/mapZoomSlice";
import { useEffect, useState } from "react";
var axios = require("axios");

const Searchbox = () => {
  const dispatch = useDispatch();
  const [suggestions, setsuggestions] = useState([]);
  const [value, setvalue] = useState();
  const [showsuggestions, setshowsuggestions] = useState(false)
  const handleClick = (event) => {
    setvalue(event);
  };
  const suggestLocation = (event) => {
    setshowsuggestions(true)
    setvalue(event);
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

  const searchLocation = (event) => {
 
    if (event.key === "Enter") {
      var config = {
        method: "get",

        url:
          "https://geocode.search.hereapi.com/v1/geocode?apiKey=ArsBpOEL5bGUOCLre5UdBeFKCNgahMq1AfywBFhfgY4&q=" +
          event.target.value,
        //   "?format=json&addressdetails=1&limit=1&polygon_svg=1",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          console.log(response);
            let box =response.data.items[0].mapView
          dispatch(
            setMapBounds({
              // lat:"22",
              // lon:"22",
              bbox: [ box.south,  box.north,box.west,box.east]
            })
          );
        })
        .catch(function (error) {
          console.log(error);
        });
        setshowsuggestions(false)

    }
  };

  return (
    <Search>
      <input
        id="Location"
        className="input"

        value={value}
        onChange={(event) => {
          suggestLocation(event.target.value);
        }}
        onKeyDown={(event) => {
          searchLocation(event);
        }}
      />
      {showsuggestions&& suggestions.map((e) => (
        <li
          onClick={(event) => {
            handleClick(event.target.innerHTML);
          }}
        >
          {e.label}
        </li>
      ))}
    </Search>
  );
};

export default Searchbox;

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
  #left {
    /* position:absolute; */
    /* left:30%;
  top:0; */
  }

  #right {
    /* position:absolute;
  left:60%;
  top:0; */
    margin-left: 50%;
  }
`;
