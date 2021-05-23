import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataset: "modis_ndvi",
  dates: "",
  show: false
};

const layerVisualiseSlice = createSlice({
  name: "layervisualise",
  initialState,
  reducers: {
    setAnalyticsVisual: (state, action) => {
      state.dataset =  action.payload.dataset;
      state.dates = action.payload.dates;
      state.show = action.payload.show;
    }
  },
});

export const { setAnalyticsVisual } = layerVisualiseSlice.actions;

export const selectLayerData = (state) => state.layervisualise;


export default layerVisualiseSlice.reducer;
