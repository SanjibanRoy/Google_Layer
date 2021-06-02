import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataset: "modis_ndvi",
  info: "",
  show: false,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfoDetails: (state, action) => {
      state.dataset = action.payload.dataset;
      state.info = action.payload.info;
      state.show = action.payload.show;
    },
  },
});

export const { setInfoDetails } = infoSlice.actions;

export const selectInfo = (state) => state.info;

export default infoSlice.reducer;
