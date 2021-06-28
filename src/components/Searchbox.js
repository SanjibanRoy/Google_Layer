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
    setshowsuggestions(false)
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
        placeholder="Search Location..."
        value={value}
        onChange={(event) => {
          suggestLocation(event.target.value);
        }}
        onKeyDown={(event) => {
          searchLocation(event);
        }}
        // onBlur ={()=>setshowsuggestions(false)}
      />
      {showsuggestions&& suggestions.map((e) => (
        <li className ="Locations"
          onClick={(event) => {
            handleClick(event.target.innerHTML);
            // searchLocation(event.target.innerHTML);
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
    margin-left: 40px;
    margin-right: 10px;
  }
  .Locations{
    list-style: none;

    background-color: #fff;
    width: 70%;
    height: 2.5rem;
    padding: 6px 12px;
    margin-left: 40px;
    margin-right: 10px;
    font-size: 14px;
  }
  .Locations:hover{
    background-color: grey;
    border-left: 2px solid orange;

  }
`;
