import { useSelector } from "react-redux";
import { selectExercises } from "../../../../../store/exercisesSlice";

const activeExercisesHandler = (arr1: any, arr2: any) => {
  const updatedArray = arr1.map((obj1: any) => {
    const matchingObj = arr2.find((obj2: any) => obj2.id === obj1.id);
    if (matchingObj) {
      const mergedObj = { ...obj1 };
      Object.keys(obj1).forEach((key) => {
        if (obj1[key] !== matchingObj[key]) {
          mergedObj[key] = matchingObj[key];
        }
      });

      return mergedObj;
    }
    return obj1;
  });

  return updatedArray;
};

export const useActiveExercises = (activeExercises: any, setsAndReps: any) => {
  const exercises = useSelector(selectExercises);

  const filteredExercises = exercises.filter((ex: any) =>
    activeExercises.includes(ex.id)
  );

  return activeExercisesHandler(filteredExercises, setsAndReps);
};
