import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const sidebarMenuSlice = createSlice({
  name: "sidebarMenu",
  initialState,
  reducers: {
    showSidebarMenu: (state) => {
      state.value = true;
      // setTimeout(() => {
        document.body.style.overflow = "hidden";
      // }, 0);
    },
    hideSidebarMenu: (state) => {
      state.value = false;
      // setTimeout(() => {
        document.body.style.overflow = "auto";
      // }, 0);
    },
  },
});

export const { showSidebarMenu, hideSidebarMenu } = sidebarMenuSlice.actions;

export default sidebarMenuSlice.reducer;
