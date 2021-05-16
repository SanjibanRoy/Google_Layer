// import { configureStore } from '@reduxjs/toolkit'
// import layerReducer from '../features/layers/layerslice'

// export default configureStore({
//   reducer: {
//     layer: layerReducer
//   }
// })

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/layers/layerslice";
// import movieReducer from "../features/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    // movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});