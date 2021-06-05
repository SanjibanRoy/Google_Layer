import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lat: "",
  lon: "",
  zoom: "",
  overlays:[],
  bounds :"",
  shape:"",
  point:"",
};

const mapSlice = createSlice({
  name: "mapstate",
  initialState,
  reducers: {
    setMapState: (state, action) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
      state.zoom = action.payload.zoom;
      state.overlays = action.payload.overlays;
      state.bounds =action.payload.bbox;
      state.shape=action.payload.shape;
      state.point=action.payload.point;
    },
  },
});

export const { setMapState } = mapSlice.actions;
export const selectMapstate = (state) => state.mapstate;

export default mapSlice.reducer;
