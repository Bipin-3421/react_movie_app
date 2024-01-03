import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
};

export const homeSlice = createSlice({
  name: "home", //action type
  initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { getApiConfiguration } = homeSlice.actions;
export default homeSlice.reducer;
