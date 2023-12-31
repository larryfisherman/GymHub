import React from "react";
import { WorkoutDiary } from "../pages/Home/Tabs/WorkoutDiary/WorkoutDiary";
import { Recipes } from "../pages/Home/Tabs/Recipes/Recipes";
import { Exercises } from "../pages/Home/Tabs/Exercises/Exercises";
import { Ingredients } from "../pages/Home/Tabs/Ingredients/Ingredients";

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
    component: <Exercises />,
  },
  {
    id: 5,
    component: <Ingredients />,
  },
];

export const useTab = (index: number) => {
  const tab = tabs.find((el) => el.id === index);
  return tab?.component;
};
