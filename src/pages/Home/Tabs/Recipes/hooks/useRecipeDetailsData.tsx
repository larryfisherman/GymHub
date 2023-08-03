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
  const [steps, setSteps] = useState<stepsStateProps[]>([]);
  const [ingredients, setIngredients] = useState<any>([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showRecipeIngredientsPopup, setShowRecipeIngredientsPopup] =
    useState(false);

  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Breakfast",
      active: false,
    },
    {
      id: 2,
      title: "Lunch",
      active: false,
    },
    {
      id: 3,
      title: "Dinner",
      active: false,
    },
    {
      id: 4,
      title: "Saper",
      active: false,
    },
  ]);

  const user = useSelector(selectUser);

  useEffect(() => {
    if (!id) return setRecipeData(null);
    setLoading(true);
    axios
      .get(`https://localhost:44390/api/recipes/${id}`)
      .then((res) => {
        setRecipeData(res.data);
        setSteps(res.data.recipeSteps);

        // const newCategories = categories.map((el) => {
        //   if (el.title === res.data.category) {
        //     return { ...el, active: true };
        //   }
        //   return el;
        // });

        // setCategories(newCategories);
      })
      .then(() =>
        axios
          .get("https://localhost:44390/api/ingredients")
          .then((res) => setIngredients(res.data))
      )
      .finally(() => setLoading(false));
  }, []);

  useEffect(
    () =>
      setRecipeData((prevState: any) => ({
        ...prevState,
        category: categories.find((el) => el.active)?.title,
        recipeSteps: steps,
        recipeIngredients: ingredients,
      })),
    [steps, ingredients, categories]
  );
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
  };
};
