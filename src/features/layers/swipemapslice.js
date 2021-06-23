import { createSlice } from "@reduxjs/toolkit";
// import { layer } from "../../config";

const initialState = {
    leftmap:"",
    rightmap:""
};
// console.log(initialState)
const swipeLayerSlice = createSlice({
  name: "swipelayer",
  initialState,
  reducers: {
    setSwipeLayers: (state, action) => {
        state.leftmap = action.payload.leftmap;
        state.rightmap = action.payload.rightmap;
    },
  },
});

export const { setSwipeLayers } = swipeLayerSlice.actions;

export const selectSwipeDataSet = (state) => state.swipelayer;

export default swipeLayerSlice.reducer;
