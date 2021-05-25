import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataset: "modis_ndvi",
  operation: "diff",
  dates: "",
  mask:"",
  show:false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAnalyticsDetails: (state, action) => {
      state.dataset =  action.payload.dataset;
      state.operation = action.payload.operation;
      state.dates = action.payload.dates;
      state.mask =  action.payload.mask;
      state.show = action.payload.show;
    }
  },
});

export const { setAnalyticsDetails } = userSlice.actions;

export const selectDataSet = (state) => state.user;
export const selectOperation = (state) => state.user.operation;
export const selectDates = (state) => state.user.dates;
export const selectMask = (state) => state.user.mask;

export default userSlice.reducer;
