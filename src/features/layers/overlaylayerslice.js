import { createSlice } from "@reduxjs/toolkit";
import { layer } from "../../config";

const initialState = layer;
// console.log(initialState)
const overlayLayerSlice = createSlice({
  name: "overlaylayer",
  initialState,
  reducers: {
    setAnalyticsDetails: (state, action) => {
      if (action.payload.layer !== undefined) {
        // state[action.payload.id].show = false;
        // console.log(state)
        state[action.payload.id].show = true;
        state[action.payload.id].layer = action.payload.layer;

        state[action.payload.id].layer_date=action.payload.layer_date;

      } else {
        state[action.payload.id].show = action.payload.show;
      }
    },
  },
});

export const { setAnalyticsDetails } = overlayLayerSlice.actions;

export const selectLayerDataSet = (state) => state.overlaylayer;

export default overlayLayerSlice.reducer;
