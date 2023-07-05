export const addIngredient = (ingrediens: any) => {
  return {
    id: ingrediens.length + 1,
    name: null,
    amount: null,
  };
};
