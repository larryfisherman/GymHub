import {
  Workout1,
  Workout2,
  Workout3,
  Workout4,
  Workout5,
  Workout6,
  Workout7,
  Workout8,
} from "assets";

export const generateRandomWorkoutImage = () => {
  const workoutImages = [
    Workout1,
    Workout2,
    Workout3,
    Workout4,
    Workout5,
    Workout6,
    Workout7,
    Workout8,
  ];

  const randomWorkoutImageNumber = Math.floor(
    Math.random() * workoutImages.length
  );

  return workoutImages[randomWorkoutImageNumber];
};
