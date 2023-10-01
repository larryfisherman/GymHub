import { useState } from "react";
import axios from "axios";
import { NotifyUser } from "../../../../../helpers/NotifyUser/NotifyUser";

export const useRecipesData = () => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showRecipeDetails, setShowRecipeDetails] = useState(false);
  const [recipeDetailsId, setRecipeDetailsId] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(1);

  const filteredRecipes =
    selectedCategory === 1
      ? recipes
      : recipes.filter((recipe: any) => recipe.categoryId === selectedCategory);

  const getRecipes = () => {
    setLoading(true);
    axios
      .get("https://gymhubb.azurewebsites.net/api//recipes/")
      .then((res) => setRecipes(res.data))
      .then(() =>
        axios.get("https://gymhubb.azurewebsites.net/api/categories/")
      )
      .then((res) => setCategories(res.data))
      .catch((err) => NotifyUser(err))
      .finally(() => setLoading(false));
  };

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
    filteredRecipes,
  };
};
