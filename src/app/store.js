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
import overlaylayerReducer from "../features/layers/overlaylayerslice";
import baselayerReducer from "../features/layers/baselayerslice"
export default configureStore({
  reducer: {
    user: userReducer,
    layervisualise: layervisualiseReducer,
    overlaylayer:overlaylayerReducer,
    baselayer:baselayerReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});