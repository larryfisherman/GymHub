import { useState, useEffect } from "react";
import axios from "axios";

export const useWorkoutDiaryData = () => {
  const [workouts, setWorkouts] = useState([]);
  const [showEditWorkoutDetails, setShowEditWorkoutDetails] = useState(false);
  const [workoutId, setWorkoutId] = useState(0);
  const [loading, setLoading] = useState(false);

  const getWorkouts = () => {
    setLoading(true);
    axios
      .get("https://gymhub.azurewebsites.net/api/workouts")
      .then((res) => setWorkouts(res.data))
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
