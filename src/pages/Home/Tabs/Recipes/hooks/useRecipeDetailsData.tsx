import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../../store/userSlice";
import axios from "axios";

interface stepsStateProps {
  id: number;
  title: string;
  description: string;
}

interface ingredientsStateProps {
  id?: number;
  name: string;
  amount: number;
}

export const useRecipeDetailsData = (id: number) => {
  const [recipeData, setRecipeData] = useState<any>([]);
  const [steps, setSteps] = useState<any>([]);
  const [ingredients, setIngredients] = useState<ingredientsStateProps[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<any>([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showRecipeIngredientsPopup, setShowRecipeIngredientsPopup] =
    useState(false);

  const user = useSelector(selectUser);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://gymhub.azurewebsites.net/api/categories")
      .then((res) => setCategories(res.data));

    if (!id) {
      setRecipeData([]);
      axios
        .get("https://gymhub.azurewebsites.net/api/ingredients")
        .then((res) => setIngredients(res.data))
        .finally(() => setLoading(false));
      return;
    }
    axios
      .get(`https://gymhub.azurewebsites.net/api/recipes/${id}`)
      .then((res) => {
        setRecipeData(res.data.recipe);
        setActiveCategory(res.data.recipe.categoryId);
        setSteps(res.data.recipeSteps);
        setSelectedIngredients(res.data.recipeIngredients);
      })
      .then(() =>
        axios
          .get("https://gymhub.azurewebsites.net/api/ingredients")
          .then((res) => setIngredients(res.data))
      )
      .finally(() => setLoading(false));
  }, []);

  return {
    recipeData,
    setRecipeData,
    loading,
    setLoading,
    categories,
    setCategories,
    steps,
    setSteps,
    ingredients,
    setIngredients,
    user,
    showRecipeIngredientsPopup,
    setShowRecipeIngredientsPopup,
    selectedIngredients,
    setSelectedIngredients,
    setActiveCategory,
    activeCategory,
  };
};
