import { Recipe1, Recipe2, Recipe3, Recipe4, Recipe5, Recipe6 } from "assets";

export const generateCategoryImage = (el: any) => {
  const categoryImages = [Recipe1, Recipe2, Recipe3, Recipe4, Recipe5, Recipe6];

  const categoryImageIndex = el.categoryId - 1;

  return categoryImages[categoryImageIndex];
};
