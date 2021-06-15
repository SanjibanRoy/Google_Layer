import { createSlice } from "@reduxjs/toolkit";
import { apps } from "../../config";

const initialState = apps;
const appSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    setAppDetails: (state, action) => {
      console.log(action.payload.data);
      state.map((st) => {
        st.id === action.payload.data ? (st.show = true) : (st.show = false);
      });
    },
  },
});

export const { setAppDetails } = appSlice.actions;

export const selectAppDataSet = (state) => state.apps;

export default appSlice.reducer;
