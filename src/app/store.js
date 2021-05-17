// import { configureStore } from '@reduxjs/toolkit'
// import layerReducer from '../features/layers/layerslice'

// export default configureStore({
//   reducer: {
//     layer: layerReducer
//   }
// })

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/layers/layerslice";
import layervisualiseReducer from "../features/layers/layervisualiseslice";

export default configureStore({
  reducer: {
    user: userReducer,
    layervisualise: layervisualiseReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});