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
  ingrediens: any;
}

export const RecipeDetailsIngredient = ({
  id,
  amount,
  name,
  ingrediens,
  setIngrediens,
}: Props) => {
  const handleInputChange = (id: number, property: string, value: string) => {
    setIngrediens((prevData: any) =>
      prevData.map((item: any) =>
        item.id === id ? { ...item, [property]: value } : item
      )
    );
  };

  const removeIngredient = () => {
    const element = ingrediens.find((el: any) => el.id === id);

    setIngrediens((prevState) =>
      prevState.filter((el) => el.id !== element.id)
    );
  };

  return (
    <Container>
      <AmountInput
        placeholder="Amount"
        value={amount}
        onChange={(e) => handleInputChange(id, "amount", e.target.value)}
        type="number"
      />
      <IngredientInput
        placeholder="Ingredient"
        value={name}
        onChange={(e) => handleInputChange(id, "name", e.target.value)}
      />
      <TrashIcon src="./assets/trash-icon.svg" onClick={removeIngredient} />
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
