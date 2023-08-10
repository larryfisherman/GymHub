import { useEffect, useState } from "react";
import axios from "axios";
import { useActiveExercises } from "./useActiveExercises";
import { NotifyUser } from "../../../../../helpers/NotifyUser/NotifyUser";

export const useWorkoutDetailsData = (id: number) => {
  const [loading, setLoading] = useState(false);
  const [workoutData, setWorkoutData] = useState<any>([]);
  const [setsAndReps, setSetsAndReps] = useState<any>([]);
  const [activeExercises, setActiveExercises] = useState<any>([]);
  const [exercises, setExercises] = useState<any>([]);

  const filteredExercises = useActiveExercises(activeExercises, setsAndReps);

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
      .then(() => axios.get(`https://gymhub.azurewebsites.net/api/exercises`))
      .then((res) => setExercises(res.data))
      .catch((err) => NotifyUser(err))
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
    exercises,
  };
};
