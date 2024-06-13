import { combineReducers } from "redux";
import dropReducer from "./dropReducer";
import settingReducer from './settingReducer';
import getPhotoReducer from "./getPhotoReducer";
import carouselReducer from "./carouselReducer";
import getSearchPhotoReducer from "./getSearchPhotoReducer"

const rootReducer = combineReducers({
  dropReducer,
  settingReducer,
  getPhotoReducer,
  carouselReducer,
  getSearchPhotoReducer
});

export default rootReducer;
