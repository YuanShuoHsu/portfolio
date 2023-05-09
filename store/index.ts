import { configureStore } from "@reduxjs/toolkit";

import nightReducer from "./slice/night";
import sidebarMenuReducer from "./slice/sidebarMenu";

export const store = configureStore({
  reducer: {
    night: nightReducer,
    sidebarMenu: sidebarMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
