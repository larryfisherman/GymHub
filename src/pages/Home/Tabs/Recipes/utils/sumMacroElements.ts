export const sumMacroElements = (ingredients: any) => {
  let totalFat = 0;
  let totalCarbo = 0;
  let totalKcal = 0;
  let totalProteins = 0;

  ingredients.forEach((ingredient: any) => {
    totalFat += ingredient.fat;
    totalCarbo += ingredient.carbs;
    totalKcal += ingredient.kcal;
    totalProteins += ingredient.protein;
  });

  return {
    totalFat,
    totalCarbo,
    totalKcal,
    totalProteins,
  };
};
