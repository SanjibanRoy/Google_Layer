import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataset: "", 
  info:"", 
  show: false,
};

const layerInfoSlice = createSlice({
  name: "layerinfo",
  initialState,
  reducers: {
    setLayerInfoDetails: (state, action) => {
      state.dataset = action.payload.dataset;
      state.info = action.payload.info;
      state.show = action.payload.show;
    },
  },
});

export const { setLayerInfoDetails } = layerInfoSlice.actions;

export const selectLayerInfo = (state) => state.layerinfo;

export default layerInfoSlice.reducer;
