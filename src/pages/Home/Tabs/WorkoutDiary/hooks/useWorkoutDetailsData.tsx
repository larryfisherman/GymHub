import { useEffect, useState } from "react";
import axios from "axios";
import { useActiveExercises } from "./useActiveExercises";

export const useWorkoutDetailsData = (id: number) => {
  const [loading, setLoading] = useState(false);
  const [workoutData, setWorkoutData] = useState<any>([]);
  const [setsAndReps, setSetsAndReps] = useState<any>([]);
  const [activeExercises, setActiveExercises] = useState<any>([]);

  const filteredExercises = useActiveExercises(activeExercises, setsAndReps);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    axios
      .get(`https://localhost:44390/api/workouts/${id}`)
      .then((res) => {
        setWorkoutData(res.data.workout);
        setSetsAndReps(res.data.exercises);
        setActiveExercises(res.data.exercises.map((el: any) => el.id));
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setWorkoutData((prevState: any) => ({
      ...prevState,
    }));
  }, [activeExercises, setsAndReps]);

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
