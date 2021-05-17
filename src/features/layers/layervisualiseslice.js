import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataset: "Test",
  dates: ""
};

const layerVisualiseSlice = createSlice({
  name: "layervisualise",
  initialState,
  reducers: {
    setAnalyticsDetails: (state, action) => {
      state.dataset =  action.payload.dataset;
      state.dates = action.payload.dates;
    }
  },
});

export const { setAnalyticsDetails } = layerVisualiseSlice.actions;

export const selectLayerDataSet = (state) => state.layervisualise;


export default layerVisualiseSlice.reducer;
