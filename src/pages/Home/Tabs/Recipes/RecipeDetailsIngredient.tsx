import React from "react";
import styled from "styled-components";

interface ingrediensStateProps {
  id: number;
  name: string;
  amount: number;
}

interface Props {
  id: number;
  amount: number;
  name: string;
  setIngrediens: React.Dispatch<React.SetStateAction<ingrediensStateProps[]>>;
}

export const RecipeDetailsIngredient = ({
  id,
  amount,
  name,
  setIngrediens,
}: Props) => {
  return (
    <Container>
      <AmountInput placeholder="Amount" value={amount} />
      <IngredientInput placeholder="Ingredient" value={name} />
      <TrashIcon src="./assets/trash-icon.svg" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-top: 1rem;
`;

const AmountInput = styled.input`
  padding: 5px;
`;

const IngredientInput = styled.input`
  width: 60%;
  padding: 5px;
`;
const TrashIcon = styled.img`
  cursor: pointer;
`;
