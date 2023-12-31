import React from "react";
import styled from "styled-components";
import { RecipeDetailsIngredient } from "./RecipeDetailsIngredient";
import { useRecipeIngredientsPopup } from "../hooks/useRecipeIngredientsPopup";
import { CrossIconImg, MagnifyingGlassIcon } from "assets";

interface IngredientsProps {
  ingredientId: number;
  name: string;
  protein: number;
  fat: number;
  carbs: number;
  kcal: number;
  amount: number;
}

interface Props {
  setShowRecipeIngredientsPopup: React.Dispatch<React.SetStateAction<boolean>>;
  ingredients: any;
  selectedIngredients: any;
  setSelectedIngredients: React.Dispatch<React.SetStateAction<any>>;
}

export const RecipeIngredientsPopup = ({
  setShowRecipeIngredientsPopup,
  ingredients,
  selectedIngredients,
  setSelectedIngredients,
}: Props) => {
  const {
    popupRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    filterValue,
    setFilterValue,
  } = useRecipeIngredientsPopup();

  const filteredIngredients = ingredients.filter((el: any) =>
    el.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <Container
      ref={popupRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Header>
        <ExitButton
          src={CrossIconImg}
          onClick={() => setShowRecipeIngredientsPopup(false)}
        />
        <Title>Add your ingredients!</Title>
        <SearchInputSection>
          <SearchInput
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <SearchIcon src={MagnifyingGlassIcon} />
        </SearchInputSection>
      </Header>
      <Content>
        <IngredientsSection>
          {filteredIngredients.map((el: IngredientsProps) => {
            const isActive = selectedIngredients.find(
              (selectedIngredient: IngredientsProps) =>
                selectedIngredient.ingredientId === el.ingredientId
            );
            return (
              <RecipeDetailsIngredient
                key={el.ingredientId}
                id={el.ingredientId}
                name={el.name}
                protein={el.protein}
                fat={el.fat}
                carbs={el.carbs}
                kcal={el.kcal}
                amount={el.amount}
                selectedIngredients={selectedIngredients}
                setSelectedIngredients={setSelectedIngredients}
                ingredients={ingredients}
                style={{
                  border: isActive
                    ? "2px solid #FF9800"
                    : "2px solid transparent",
                  cursor: "pointer",
                }}
              />
            );
          })}
        </IngredientsSection>
      </Content>
    </Container>
  );
};

const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: #f1f1f1;
  padding: 10px;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-size: 2rem;
`;

const SearchIcon = styled.img`
  fill: #999;
  width: 16px;
  height: 16px;
  margin-right: 1rem;
`;

const SearchInputSection = styled.div`
  margin-bottom: 2rem;
  display: flex;
  border: 1px solid #ff9800;
  width: 20rem;
  align-items: center;
  background-color: white;
  margin-top: 2rem;
`;

const SearchInput = styled.input`
  display: flex;
  width: 20rem;
  height: 2rem;
  border: none;
  outline: none;
  padding: 1rem;
`;

const ExitButton = styled.img`
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  &:hover {
    cursor: pointer;
  }
`;

const IngredientsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 40%;
  height: 90%;
  background-color: #f8f8f8;
  border: 1px solid #ff9800;
  border-radius: 4px;
  z-index: 9999;
  cursor: grab;

  overflow-y: scroll;
`;
