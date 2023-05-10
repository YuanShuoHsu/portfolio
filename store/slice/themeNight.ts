import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const themeNightSlice = createSlice({
  name: "themeNight",
  initialState,
  reducers: {
    toggleThemeNight: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleThemeNight } = themeNightSlice.actions;

export default themeNightSlice.reducer;
