import { createSlice } from "@reduxjs/toolkit";

export const recepiesSlice = createSlice({
  name: "recepies",
  initialState: {
    recepies: null,
  },
  reducers: {
    setRecepies: (state, action) => {
      state.recepies = action.payload.recepies;
    },
  },
});

export const { setRecepies } = recepiesSlice.actions;
export const selectRecepies = (state) => state.movie.recepies;

export default recepiesSlice.reducer;
