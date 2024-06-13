import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isDropOpen: false
};

export const isDropOpen = createSlice({
  name: "isModalOpen",
  initialState,
  reducers: {    
    UPDATE_DROP: (state, action) => {
      state.isDropOpen = action.payload
    },
  },
});

export const { UPDATE_DROP } = isDropOpen.actions;
export default isDropOpen.reducer;