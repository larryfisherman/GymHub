import { useEffect, useState } from "react";
import axios from "axios";

export const useRecipesData = () => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showRecipeDetails, setShowRecipeDetails] = useState(false);
  const [recipeDetailsId, setRecipeDetailsId] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const getRecipes = () => {
    setLoading(true);
    axios
      .get("https://localhost:44390/api/recipes/")
      .then((res) => setRecipes(res.data))
      .finally(() => setLoading(false));
  };

  useEffect(() => getRecipes, []);

  return {
    loading,
    recipes,
    categories,
    showRecipeDetails,
    recipeDetailsId,
    selectedCategory,
    setShowRecipeDetails,
    setSelectedCategory,
    setRecipeDetailsId,
  };
};
