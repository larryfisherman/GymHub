const activeExercisesHandler = (arr1: any, arr2: any) => {
  const updatedArray = arr1.map((obj1: any) => {
    const matchingObj = arr2.find(
      (obj2: any) => obj2.exerciseId === obj1.exerciseId
    );
    if (matchingObj) {
      const mergedObj = { ...obj1 };
      matchingObj.title = mergedObj.title;
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

export const useActiveExercises = (
  exercises: any,
  activeExercises: any,
  setsAndReps: any
) => {
  const filteredExercises = exercises.filter((ex: any) =>
    activeExercises.includes(ex.exerciseId)
  );

  return activeExercisesHandler(filteredExercises, setsAndReps);
};
