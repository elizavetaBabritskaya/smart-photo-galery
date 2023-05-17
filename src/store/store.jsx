import { configureStore } from "@reduxjs/toolkit";
import {Api} from "./api";
import {useDispatch} from "react-redux";
import {isDropOpen} from "../reducers/openDrop"
import { isSettingOpen } from "../reducers/openSetting";
import {isVievWindowOpen} from "../reducers/openVievWindow"
import { searchApi } from "./searchApi";
import { authApi } from "./authApi";
import { authReducer } from "../reducers/authReducer";

const initialState = {
  isDropOpen: false,
  isSettingOpen: false,
  isVievWindowOpen: false,
}

export const store = configureStore ({
  reducer: {
    isDropOpen: isDropOpen.reducer,
    isSettingOpen: isSettingOpen.reducer,
    isVievWindowOpen: isVievWindowOpen.reducer,
    authReducer: authReducer.reducer,
    [Api.reducerPath] : Api.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [authApi.reducerPath]: authApi.reducer 
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(Api.middleware).concat(searchApi.middleware).concat(authApi.middleware)
})

export const useStoreDispatch = () =>  store.dispatch