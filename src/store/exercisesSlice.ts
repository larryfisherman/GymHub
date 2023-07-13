import { createSlice } from "@reduxjs/toolkit";

export const exercisesSlice = createSlice({
  name: "exercises",
  initialState: {
    exercises: [],
  },
  reducers: {
    setExercisesStore: (state, action) => {
      state.exercises = action.payload;
    },
  },
});

export const { setExercisesStore } = exercisesSlice.actions;
export const selectExercises = (state: any) => state.exercises.exercises;

export default exercisesSlice.reducer;
