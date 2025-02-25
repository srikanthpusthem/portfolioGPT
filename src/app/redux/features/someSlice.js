import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const someSlice = createSlice({
  name: "someFeature",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = someSlice.actions;
export default someSlice.reducer;