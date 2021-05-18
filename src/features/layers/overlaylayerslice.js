import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataset: "Test",
  dates: ""
};

const overlayLayerSlice = createSlice({
  name: "overlaylayer",
  initialState,
  reducers: {
    setAnalyticsDetails: (state, action) => {
      state.dataset =  action.payload.dataset;
      state.dates = action.payload.dates;
    }
  },
});

export const { setAnalyticsDetails } = overlayLayerSlice.actions;

export const selectLayerDataSet = (state) => state.overlaylayer;


export default overlayLayerSlice.reducer;
