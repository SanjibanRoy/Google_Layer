import { createSlice } from "@reduxjs/toolkit";
import { maps } from "../../config";

const initialState = maps;
console.log(initialState);
const baseLayerSlice = createSlice({
  name: "baselayer",
  initialState,
  reducers: {
    setBaseDetails: (state, action) => {
      console.log(action.payload.data);
      state.map((st) => {
        st.id === action.payload.data ? (st.show = true) : (st.show = false);
      });
    },
  },
});

export const { setBaseDetails } = baseLayerSlice.actions;

export const selectBaseDataSet = (state) => state.baselayer;

export default baseLayerSlice.reducer;
