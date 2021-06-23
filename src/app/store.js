import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/layers/layerslice";
import layervisualiseReducer from "../features/layers/layervisualiseslice";
import overlaylayerReducer from "../features/layers/overlaylayerslice";
import baselayerReducer from "../features/layers/baselayerslice"
import appReducer from "../features/layers/appslice"
import mapStateReducer from "../features/maps/mapStateSlice"
import infoReducer from "../features/layers/infoboxslice"
import layerInfoReducer from "../features/layers/layerinfoslice"
import swipelayerReducer from "../features/layers/swipemapslice"

export default configureStore({
  reducer: {
    user: userReducer,
    layervisualise: layervisualiseReducer,
    overlaylayer:overlaylayerReducer,
    baselayer:baselayerReducer,
    apps:appReducer,
    info:infoReducer,
    mapstate: mapStateReducer,
    layerinfo:layerInfoReducer,
    swipelayer:swipelayerReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});