import { createSlice } from "@reduxjs/toolkit";
import { RefObject } from "react";

interface TargetDivsState {
  [id: string]: RefObject<HTMLDivElement>;
}

const initialState: TargetDivsState = {};

export const targetDivsSlice = createSlice({
  name: "targetDivs",
  initialState,
  reducers: {
    setTargetDivRef: (state, data) => {
      const { id, ref } = data.payload;
      state[id] = ref;
    },
  },
});

export const { setTargetDivRef } = targetDivsSlice.actions;

export default targetDivsSlice.reducer;
