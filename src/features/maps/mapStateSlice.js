import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lat: "Test",
  lon: "",
  zoom: "",
  overlays:[]
};

const mapSlice = createSlice({
  name: "mapstate",
  initialState,
  reducers: {
    setMapState: (state, action) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
      state.zoom = action.payload.zoom;
      state.overlays = action.payload.overlays
    },
  },
});

export const { setMapState } = mapSlice.actions;
export const selectMapstate = (state) => state.mapstate;

export default mapSlice.reducer;
