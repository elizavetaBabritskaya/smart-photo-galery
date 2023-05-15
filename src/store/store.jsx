import { configureStore } from "@reduxjs/toolkit";
import {Api} from "./api";
import {isDropOpen} from "../reducers/openDrop"
import { isSettingOpen } from "../reducers/openSetting";
import {isVievWindowOpen} from "../reducers/openVievWindow"
import { searchApi } from "./searchApi";

const initialState = {
  isDropOpen: false,
  isSettingOpen: false,
  isVievWindowOpen: false
}

export const store = configureStore ({
  reducer: {
    isDropOpen: isDropOpen.reducer,
    isSettingOpen: isSettingOpen.reducer,
    isVievWindowOpen: isVievWindowOpen.reducer,
    [Api.reducerPath] : Api.reducer,
    [searchApi.reducerPath]: searchApi.reducer 
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(Api.middleware).concat(searchApi.middleware)
})

