import { useState, useEffect } from "react";
import axios from "axios";

interface IngredientsProps {
  ingredientId: number;
  name: string;
  protein: number;
  fat: number;
  carbs: number;
  kcal: number;
  amount: number;
}

export const useIngredientData = (id: number) => {
  const [ingredientData, setIngredientData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://gymhubb.azurewebsites.net/api/ingredients/${id}`)
      .then((res) => setIngredientData(res.data))
      .finally(() => setLoading(false));
  }, []);

  return {
    ingredientData,
    loading,
  };
};
