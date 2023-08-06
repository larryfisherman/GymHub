import { useEffect, useState } from "react";
import axios from "axios";

export const useRecipesData = () => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showRecipeDetails, setShowRecipeDetails] = useState(false);
  const [recipeDetailsId, setRecipeDetailsId] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(1);

  const getRecipes = () => {
    setLoading(true);
    axios
      .get("http://gymhub.azurewebsites.net/api/recipes/")
      .then((res) => setRecipes(res.data))
      .then(() => axios.get("http://gymhub.azurewebsites.net/api/categories/"))
      .then((res) => setCategories(res.data))
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
    getRecipes,
  };
};
