import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isVievWindowOpen: false
};

export const isVievWindowOpen = createSlice({
  name: "isVievWindowOpen",
  initialState,
  reducers: {    
    UPDATE_VIEV_WINDOW_OPEN: (state, action) => {
      state.isVievWindowOpen = action.payload
    },
  },
});

export const { UPDATE_VIEV_WINDOW_OPEN } = isVievWindowOpen.actions;
export default isVievWindowOpen.reducer;