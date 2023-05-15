import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isSettingOpen: false
};

export const isSettingOpen = createSlice({
  name: "isSettingOpen",
  initialState,
  reducers: {    
    UPDATE_SETTING: (state, action) => {
      state.isSettingOpen = action.payload
    },
  },
});

export const { UPDATE_SETTING } = isSettingOpen.actions;
export default isSettingOpen.reducer;