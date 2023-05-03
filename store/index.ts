import { configureStore } from "@reduxjs/toolkit";

import nightReducer from "./slice/night";

export const store = configureStore({
  reducer: {
    night: nightReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
