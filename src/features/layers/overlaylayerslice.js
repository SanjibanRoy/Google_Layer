import { createSlice } from "@reduxjs/toolkit";
import { layer } from '../../config'

const initialState = layer
// console.log(initialState)
const overlayLayerSlice = createSlice({
  name: "overlaylayer",
  initialState,
  reducers: {
    setAnalyticsDetails: (state, action) => {
      state[action.payload.id].show = action.payload.show;
    }
  },
});

export const { setAnalyticsDetails } = overlayLayerSlice.actions;

export const selectLayerDataSet = (state) => state.overlaylayer;

export default overlayLayerSlice.reducer;