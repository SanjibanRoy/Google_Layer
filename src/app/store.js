import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/layers/layerslice";
import layervisualiseReducer from "../features/layers/layervisualiseslice";
import overlaylayerReducer from "../features/layers/overlaylayerslice";
import baselayerReducer from "../features/layers/baselayerslice"
import mapStateReducer from "../features/maps/mapStateSlice"
import infoReducer from "../features/layers/infoboxslice"

export default configureStore({
  reducer: {
    user: userReducer,
    layervisualise: layervisualiseReducer,
    overlaylayer:overlaylayerReducer,
    baselayer:baselayerReducer,
    info:infoReducer,
    mapstate: mapStateReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});