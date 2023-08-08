import { useEffect, useState } from "react";
import axios from "axios";
import { useActiveExercises } from "./useActiveExercises";

export const useWorkoutDetailsData = (id: number) => {
  const [loading, setLoading] = useState(false);
  const [workoutData, setWorkoutData] = useState<any>([]);
  const [setsAndReps, setSetsAndReps] = useState<any>([]);
  const [activeExercises, setActiveExercises] = useState<any>([]);

  const filteredExercises = useActiveExercises(activeExercises, setsAndReps);

  console.log(workoutData);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    axios
      .get(`https://gymhub.azurewebsites.net/api/workouts/${id}`)
      .then((res) => {
        setWorkoutData(res.data.workout);
        setSetsAndReps(res.data.exercises);
        setActiveExercises(res.data.exercises.map((el: any) => el.exerciseId));
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setSetsAndReps(filteredExercises);
  }, [activeExercises]);

  return {
    loading,
    setLoading,
    workoutData,
    setsAndReps,
    activeExercises,
    setSetsAndReps,
    setWorkoutData,
    setActiveExercises,
  };
};
