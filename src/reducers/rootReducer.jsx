import { combineReducers } from "redux";
import dropReducer from "./dropReducer";
import settingReducer from './settingReducer';
import getPhotoReducer from "./getPhotoReducer";
import carouselReducer from "./carouselReducer";

const rootReducer = combineReducers({
  dropReducer,
  settingReducer,
  getPhotoReducer,
  carouselReducer
});

export default rootReducer;
