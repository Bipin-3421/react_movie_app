import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres:{}
};

export const homeSlice = createSlice({
  name: "home", //action type
  initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfiguration, getGenres } = homeSlice.actions;
export default homeSlice.reducer;
