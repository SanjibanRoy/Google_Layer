import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataset: "Test",
  operation: "",
  dates: "",
  mask:""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAnalyticsDetails: (state, action) => {
      state.dataset = action.payload.dataset;
      state.operation = action.payload.operation;
      state.mask = action.payload.mask;
    }
  },
});

export const { setAnalyticsDetails } = userSlice.actions;

export const selectDataSet = (state) => state.user.dataset;
export const selectOperation = (state) => state.user.operation;
export const selectDates = (state) => state.user.dates;
export const selectMask = (state) => state.user.mask;

export default userSlice.reducer;
