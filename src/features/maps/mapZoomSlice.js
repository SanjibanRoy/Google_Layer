import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lat: "",
  lon: "",
  bounds : [21.9401104670001814,29.4616322430000537, 88.0130594750001478, 97.4115970890000540],
  path: ""
};

const mapZoomSlice = createSlice({
  name: "mapzoom",
  initialState,
  reducers: {
    setMapBounds: (state, action) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
      state.bounds =action.payload.bbox;
      state.path = action.payload.path;
    },
  },
});

export const { setMapBounds } = mapZoomSlice.actions;
export const selectMapZoomstate = (state) => state.mapzoom;

export default mapZoomSlice.reducer;
