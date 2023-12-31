import { useState, useEffect } from "react";
import axios from "axios";
import { NotifyUser } from "../../../../../helpers/NotifyUser/NotifyUser";

export const useWorkoutDiaryData = () => {
  const [workouts, setWorkouts] = useState([]);
  const [showEditWorkoutDetails, setShowEditWorkoutDetails] = useState(false);
  const [workoutId, setWorkoutId] = useState(0);
  const [loading, setLoading] = useState(false);

  const getWorkouts = () => {
    setLoading(true);
    axios
      .get("https://gymhubb.azurewebsites.net/api/workouts")
      .then((res) => setWorkouts(res.data))
      .catch((err) => NotifyUser(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getWorkouts();
  }, []);

  return {
    workouts,
    showEditWorkoutDetails,
    setShowEditWorkoutDetails,
    workoutId,
    setWorkoutId,
    loading,
    setLoading,
    getWorkouts,
  };
};
