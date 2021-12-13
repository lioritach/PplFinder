import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "nat",
  initialState: {
    data: [],
  },
  reducers: {
    getNat: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getNat } = Slice.actions;
export const selectNat = (state) => state.nat.data;

export default Slice.reducer;
