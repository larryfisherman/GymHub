import React from "react";
import { WorkoutDiary } from "../components/WorkoutDiary/WorkoutDiary";
import { Recipes } from "../components/Recipes/Recipes";

const tabs = [
  { id: 1 },
  {
    id: 2,
    component: <WorkoutDiary />,
  },
  {
    id: 3,
    component: <Recipes />,
  },
  {
    id: 4,
    // component: <Exercises/>
  },
  {
    id: 5,
    // component: <Progress/>
  },
];

export const useTab = (index: number) => {
  const tab = tabs.find((el) => el.id === index);
  return tab?.component;
};
