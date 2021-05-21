import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  dataset: "Test",
  dates: "",
  show: false
}];

const layerVisualiseSlice = createSlice({
  name: "layervisualise",
  initialState,
  reducers: {
    setAnalyticsVisual: (state, action) => {
      state[0].dataset =  action.payload.dataset;
      state[0].dates = action.payload.dates;
      state[0].show = action.payload.show;
    }
  },
});

export const { setAnalyticsVisual } = layerVisualiseSlice.actions;

export const selectLayerData = (state) => state.layervisualise;


export default layerVisualiseSlice.reducer;
