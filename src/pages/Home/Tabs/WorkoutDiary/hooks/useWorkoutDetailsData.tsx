import { useEffect, useState } from "react";
import axios from "axios";
import { useActiveExercises } from "./useActiveExercises";
import { useSelector } from "react-redux";
import { selectExercises } from "../../../../../store/exercisesSlice";
import { selectUser } from "../../../../../store/userSlice";

export const useWorkoutDetailsData = (id: number) => {
  const [loading, setLoading] = useState(false);
  const [workoutData, setWorkoutData] = useState<any>([]);
  const [setsAndReps, setSetsAndReps] = useState<any>([]);
  const [activeExercises, setActiveExercises] = useState<any>([]);

  const exercises = useSelector(selectExercises);
  const [exercisesList, setExercisesList] = useState<any>(exercises);

  const filteredExercises = useActiveExercises(activeExercises, setsAndReps);

  const user = useSelector(selectUser);

  useEffect(() => {
    if (!id) return;

    if (!exercisesList)
      axios
        .get(`https://gymhub.azurewebsites.net/api/exercises`)
        .then((res) => setExercisesList(res.data));

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
    user,
    exercisesList,
  };
};
