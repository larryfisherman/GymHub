import { useState, useEffect } from "react";
import axios from "axios";

export const useWorkoutDiaryData = () => {
  const [workouts, setWorkouts] = useState([]);
  const [showEditWorkoutDetails, setShowEditWorkoutDetails] = useState(false);
  const [workoutId, setWorkoutId] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://localhost:44390/api/workouts")
      .then((res) => {
        setWorkouts(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    workouts,
    showEditWorkoutDetails,
    setShowEditWorkoutDetails,
    workoutId,
    setWorkoutId,
    loading,
  };
};
