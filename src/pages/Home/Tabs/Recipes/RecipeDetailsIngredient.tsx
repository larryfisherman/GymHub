import React, { useState } from "react";
import styled from "styled-components";

interface ingrediensStateProps {
  id?: number;
  name: string;
  amount: number;
}

interface Props {
  id: number;
  amount: number;
  name: string;
  setIngredients: React.Dispatch<React.SetStateAction<ingrediensStateProps[]>>;
  ingredients: any;
}

export const RecipeDetailsIngredient = ({
  name,
  id,
  protein,
  fat,
  carbs,
  kcal,
  selectedIngredients,
  setSelectedIngredients,
  ingredients,
  style,
}: any) => {
  const handleIngredientClick = (id: number) => {
    if (
      selectedIngredients.some(
        (ingredient: any) => ingredient.ingredientId === id
      )
    ) {
      setSelectedIngredients((prevSelected: any) =>
        prevSelected.filter((ingredient: any) => ingredient.ingredientId !== id)
      );
    } else {
      const clickedIngredient = ingredients.find(
        (ingredient: any) => ingredient.ingredientId === id
      );
      if (clickedIngredient) {
        setSelectedIngredients((prevSelected: any) => [
          ...prevSelected,
          clickedIngredient,
        ]);
      }
    }
  };

  return (
    <Container
      style={style}
      onClick={() => {
        handleIngredientClick(id);
      }}
    >
      <Content>
        <IngredientTitle>{name}</IngredientTitle>
        <IngredientMakro>
          <IngredientMakroItem>{protein}g protein</IngredientMakroItem>
          <IngredientMakroItem>{fat}g fat</IngredientMakroItem>
          <IngredientMakroItem>{carbs}g carbs</IngredientMakroItem>
          <IngredientMakroItem>{kcal} kcal</IngredientMakroItem>
        </IngredientMakro>
      </Content>
    </Container>
  );
};

const IngredientMakro = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 5rem;
  width: 70%;
`;
const IngredientMakroItem = styled.span``;

const Container = styled.div`
  width: 100%;
  background-color: white;
  margin-bottom: 2rem;
  border: 2px solid transparent;

  &:hover {
    cursor: pointer;
  }
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`;

const IngredientTitle = styled.h3`
  display: flex;
  font-size: 1.5rem;
  flex: 1;
`;
