import React from 'react'
var axios = require('axios');
var data = JSON.stringify({
  "grant_type": "client_credentials",
  "client_secret": "33OkryzDZsIlcgT3Xr49CT7kbTdkmY_Z7OnkRM9hXt21OeKcy4I3IB_TsvD63NcxzE9wRy714JRtd9YQbrbtYw==",
  "client_id": "lrFxI-iSEg_beRrrD9QkHrg5XlTtSXBJni5Xg74S5_E1FNCfKaKOtpb4s9rXsGs_3wI2qK6d4BQpygSBNJntx0Pa99ISk9p-"
});

var config = {
  method: 'get',
  url: 'https://atlas.mapmyindia.com/api/places/textsearch/json?query=okhla%20phase%203&region=ind&filter=pin:110020',
  headers: { 
    'Authorization': 'Bearer 0ef281f7-d114-40ac-9e89-21d8e318f560', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

const Searchbox = () => {
    return (
        null
    )
}

export default Searchbox
