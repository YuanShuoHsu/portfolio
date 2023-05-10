import { configureStore } from "@reduxjs/toolkit";

import themeNightReducer from "./slice/themeNight";
import sidebarMenuReducer from "./slice/sidebarMenu";
import targetDivsReducer from "./slice/targetDivs";

export const store = configureStore({
  reducer: {
    themeNight: themeNightReducer,
    sidebarMenu: sidebarMenuReducer,
    targetDivs: targetDivsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
