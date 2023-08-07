export const getRecipePath = (categoryId: number) => {
  let recipeId;

  switch (categoryId) {
    case 2:
      recipeId = Math.floor(Math.random() * 2) + 1;
      break;

    case 3:
      recipeId = 4;
      break;
    case 4:
      recipeId = 3;
      break;
    case 5:
      recipeId = 5;
      break;
    case 6:
      recipeId = 6;
      break;
    default:
      return "";
  }

  return `./assets/recipe-${recipeId}.svg`;
};
