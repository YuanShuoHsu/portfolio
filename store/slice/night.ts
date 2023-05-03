import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const nightSlice = createSlice({
  name: "night",
  initialState,
  reducers: {
    toggleNight: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleNight } = nightSlice.actions;

export default nightSlice.reducer;
