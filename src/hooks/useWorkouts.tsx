import React from "react";
import styled from "styled-components";
import { Workout } from "../pages/Home/Tabs/WorkoutDiary/Workout";

interface WorkoutProps {
  title: string;
  favourite: boolean;
  id: number;
}

const workouts = [
  {
    id: 1,
    title: "Legs & Deltoids",
    favourite: true,
  },
  {
    id: 2,
    title: "Chest",
    favourite: false,
  },
  {
    id: 3,
    title: "test",
    favourite: false,
  },
];

export const useWorkouts = () => {
  return (
    <Workouts>
      {workouts.map(({ title, favourite, id }: WorkoutProps) => (
        <Workout key={id} title={title} favourite={favourite} />
      ))}
    </Workouts>
  );
};

const Workouts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
