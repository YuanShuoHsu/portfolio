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
      document.body.style.overflow = "hidden";
    },
    hideSidebarMenu: (state) => {
      state.value = false;
      document.body.style.overflow = "auto";
    },
  },
});

export const { showSidebarMenu, hideSidebarMenu } = sidebarMenuSlice.actions;

export default sidebarMenuSlice.reducer;
