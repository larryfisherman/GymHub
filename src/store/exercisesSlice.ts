import { createSlice } from "@reduxjs/toolkit";

export const exercisesSlice = createSlice({
  name: "exercises",
  initialState: {
    exercises: null,
  },
  reducers: {
    setExercises: (state, action) => {
      state.exercises = action.payload.recepies;
    },
  },
});

export const { setExercises } = exercisesSlice.actions;
export const selectExercises = (state: any) => state.exercises.exercises;

export default exercisesSlice.reducer;
