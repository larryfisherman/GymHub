import React from "react";
import styled from "styled-components";

interface Props {
  id: number;
  name: string;
  protein: number;
  fat: number;
  kcal: number;
  amount: number;
  carbs: number;
  setShowIngredientDetails?: React.Dispatch<React.SetStateAction<boolean>>;
  setIngredientId?: React.Dispatch<React.SetStateAction<number>>;
}

export const Ingredient = ({
  name,
  id,
  protein,
  fat,
  carbs,
  kcal,
  setShowIngredientDetails,
  setIngredientId,
}: Props) => (
  <Container>
    <Content>
      <IngredientTitle>{name}</IngredientTitle>
      <IngredientMakro>
        <IngredientMakroItem>{protein}g protein</IngredientMakroItem>
        <IngredientMakroItem>{fat}g fat</IngredientMakroItem>
        <IngredientMakroItem>{carbs}g carbs</IngredientMakroItem>
        <IngredientMakroItem>{kcal} kcal</IngredientMakroItem>
      </IngredientMakro>
      {/* <Button
        onClick={() => {
          setShowIngredientDetails(true);
          setIngredientId(id);
        }}
      >
        SEE MORE
      </Button> */}
    </Content>
  </Container>
);

const IngredientMakro = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 5rem;
`;
const IngredientMakroItem = styled.div``;

const Container = styled.div`
  width: 49%;
  background-color: white;
  margin-bottom: 2rem;
  border-radius: 3%;
`;
const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 1rem;
`;

const Button = styled.button`
  display: flex;
  width: 7rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  background-color: #ff9800;
  font-size: 1rem;
  color: white;
  letter-spacing: 1px;
  font-weight: 700;
  border: 1px solid transparent;
  border-radius: 5%;

  &:hover {
    cursor: pointer;
  }
`;

const IngredientTitle = styled.h3`
  display: flex;
  font-size: 1.5rem;
`;
