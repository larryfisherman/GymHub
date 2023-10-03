import { Recipe1, Recipe2, Recipe3, Recipe4, Recipe5, Recipe6 } from "assets";

export const generateRecipeImage = (categoryId: number) => {
  const recipeImages = [Recipe1, Recipe2, Recipe3, Recipe4, Recipe5, Recipe6];

  return recipeImages[categoryId - 1];
};
