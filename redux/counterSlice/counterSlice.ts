import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 12,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count + 1;
    },
    decrement: (state) => {
      state.count - 1;
    },
  },
});

export default counterSlice.reducer;
