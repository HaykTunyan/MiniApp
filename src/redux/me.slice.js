import { createSlice } from "@reduxjs/toolkit";

export const meSlice = createSlice({
  name: "me",
  initialState: {
    data: null,
  },
  reducers: {
    setMeData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setMeData } = meSlice.actions;

export default meSlice.reducer;
