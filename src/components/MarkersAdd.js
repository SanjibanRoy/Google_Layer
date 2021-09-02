import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FeatureGroup, Marker,Popup } from "react-leaflet";
import { Equalizer } from "@material-ui/icons";
import L from 'leaflet';
import eqicon from './../pic/earthquake.png';
const MarkersAdd = (url) => {
    // console.log(url)
  const [eq, setEQ] = useState({ data: [], fetching: false });
  const earthqicon = new L.Icon({
    iconUrl: eqicon,
    iconSize: [26, 26],
    popupAnchor: [0, -15],
    shadowAnchor: [13, 28]
  })
  const navigate = () => {
    var config = {
      method: "get",
      url: url.url,

      headers: {},
    };
    axios(config)
      .then(function (response) {
        //console.log(response);

        let ds = response.data.map((e) => ({
          "lat": e.latitude,
          "lng": e.longitude,
          "mag": e.mag,
          "date": e.occurenceTime,
        }));

        setEQ({data:ds, fetching: true});
       // console.log(eq)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    navigate();
    //console.log(eq)
  }, []);
  return (
    <div>
      {
        (//console.log(eq),
        (
          <FeatureGroup>
            {eq.fetching&&eq.data.map((e) => (
              <Marker position={[e.lat, e.lng]} icon={earthqicon}>
              <Popup>
                Magnitude: {e.mag}
            </Popup></Marker>
            ))}
          </FeatureGroup>
        ))
      }
    </div>
  );
};

export default MarkersAdd;
