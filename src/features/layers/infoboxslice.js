import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statename: "modis_ndvi",
  districtname: "",
  // show: false,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfoDetails: (state, action) => {
      state.statename = action.payload.statename;
      state.districtname = action.payload.distname;
      // state.show = action.payload.show;
    },
  },
});

export const { setInfoDetails } = infoSlice.actions;

export const selectInfo = (state) => state.info;

export default infoSlice.reducer;
