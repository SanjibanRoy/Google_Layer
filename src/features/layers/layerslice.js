// // import {createSlice} from 'react-redux';
// // import { createSlice } from '@reduxjs/toolkit'
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   layers: [
//     "Test1",
//     "Test2",
//     //Administrator boundary start
//   ],
// };

// // const layerSlice = createSlice({
// //   name: "layer",
// //   initialState,
// //   reducers: {},
// // });

// const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {},
//   });
// export const selectLayers = (state) => state.user.name;

// // export const selectLayers = (state) => state.layer.layers;

// export default userSlice.reducers;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: ["Test","Test2"],
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
  },
});

// export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;