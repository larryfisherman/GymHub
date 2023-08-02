import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Ingredient } from "./Ingredient";
import { IngredientDetails } from "./IngredientDetails";

export const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [showIngredientDetails, setShowIngredientDetails] = useState(false);
  const [ingredientId, setIngredientId] = useState(0);

  const filteredIngredients = ingredients.filter((el: any) =>
    el.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  axios
    .get("https://localhost:44390/api/ingredients")
    .then((res) => setIngredients(res.data));

  return (
    <Container>
      {showIngredientDetails && <IngredientDetails id={ingredientId} />}
      <Content>
        <TitleSection>
          <PreTitle>Explore</PreTitle>
          <Title>Ingredients Library</Title>
        </TitleSection>
        <SearchInputSection>
          <SearchInput
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <SearchIcon src="./assets/magnifying-glass-icon.svg" />
        </SearchInputSection>
        <IngredientsSection>
          {filteredIngredients.map((el: any) => (
            <Ingredient
              id={el.IngredientId}
              name={el.name}
              protein={el.protein}
              fat={el.fat}
              carbs={el.carbs}
              kcal={el.kcal}
              amount={el.amount}
              setShowIngredientDetails={setShowIngredientDetails}
              setIngredientId={setIngredientId}
            />
          ))}
        </IngredientsSection>
      </Content>
    </Container>
  );
};

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
`;

const SearchInput = styled.input`
  display: flex;
  width: 20rem;
  height: 2rem;
  border: none;
  outline: none;
  padding: 1rem;
`;

const IngredientsSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

const TitleSection = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const PreTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 100;
`;
const Title = styled.span`
  font-size: 2rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
