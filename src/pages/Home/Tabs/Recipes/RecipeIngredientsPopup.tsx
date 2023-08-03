import React, { useRef } from "react";
import styled from "styled-components";
import { RecipeDetailsIngredient } from "./RecipeDetailsIngredient";
import { Ingredient } from "../Ingredients/Ingredient";

export const RecipeIngredientsPopup = ({
  setShowRecipeIngredientsPopup,
  ingredients,
}: any) => {
  const popupRef = useRef<any>(null);
  const isDragging = useRef(false);
  const initialPosition = useRef({ x: 0, y: 0 });

  const handleMouseDown = (event: any) => {
    isDragging.current = true;
    initialPosition.current = {
      x: event.clientX - popupRef.current.offsetLeft,
      y: event.clientY - popupRef.current.offsetTop,
    };
  };

  const handleMouseMove = (event: any) => {
    if (!isDragging.current) return;

    const x = event.clientX - initialPosition.current.x;
    const y = event.clientY - initialPosition.current.y;
    popupRef.current.style.left = `${x}px`;
    popupRef.current.style.top = `${y}px`;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const closePopup = () => {
    // Implement close popup functionality here
    console.log("Popup closed!");
  };

  return (
    <Container
      ref={popupRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Content>
        <Header>
          <ExitButton
            src="./assets/cross-icon.svg"
            onClick={() => setShowRecipeIngredientsPopup(false)}
          />
          <Title>Add your ingredients!</Title>
          <SearchInputSection>
            <SearchInput />
            <SearchIcon src="./assets/magnifying-glass-icon.svg" />
          </SearchInputSection>
        </Header>
        <IngredientsSection>
          {ingredients.map((el: any) => (
            <RecipeDetailsIngredient
              id={el.ingredientId}
              name={el.name}
              protein={el.protein}
              fat={el.fat}
              carbs={el.carbs}
              kcal={el.kcal}
              amount={el.amount}
            />
          ))}
        </IngredientsSection>
      </Content>
    </Container>
  );
};

const Header = styled.div`
  width: 100%;
  height: 30%;
  position: sticky;
  top: -0.6rem;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  position: absolute;
  width: 40%;
  height: 90%;
  background-color: #f8f8f8;
  border: 1px solid #ff9800;
  border-radius: 4px;
  z-index: 9999;
  padding: 10px;
  cursor: grab;

  overflow-y: scroll;
`;
