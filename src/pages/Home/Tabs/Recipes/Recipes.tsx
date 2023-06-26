import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Recipe } from "./Recipe";
import { CategoriesItem } from "./CategoriesItem";
import { ComplexSets } from "./ComplexSets";
import { AddNewRecipePopup } from "./AddNewRecipePopup";

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44390/api/recipes/")
      .then((res) => setRecipes(res.data));
  }, []);
  const categoriesItems = [
    {
      id: 1,
      title: "Meat dishes",
      image: "recipe-1",
    },
    {
      id: 2,
      title: "Salads",
      image: "recipe-2",
    },
    {
      id: 3,
      title: "Meat dishes",
      image: "recipe-1",
    },
    {
      id: 4,
      title: "Salads",
      image: "recipe-2",
    },
    {
      id: 5,
      title: "Meat dishes",
      image: "recipe-1",
    },
    {
      id: 6,
      title: "Meat dishes",
      image: "recipe-1",
    },
    {
      id: 7,
      title: "Meat dishes",
      image: "recipe-1",
    },
  ];

  return (
    <Container>
      <Content>
        <TitleSection>
          <span>Your Delicious</span>
          <span>Recipes</span>
        </TitleSection>
        <CategoriesSection>
          {categoriesItems.map((el) => (
            <CategoriesItem key={el.id} title={el.title} image={el.image} />
          ))}
        </CategoriesSection>
        <AllItems>
          <RecipesSection>
            <Title>All items</Title>
            <RecipePopup>
              <Title>Add New Recipe</Title>
              <AddRecipe>+</AddRecipe>
            </RecipePopup>
            {recipes &&
              recipes.map((el: any) => (
                <Recipe
                  key={el.id}
                  title={el.title}
                  description={el.description}
                  kcal={el.kcal}
                  time={el.time}
                  image={"./assets/recipe-1.svg"}
                />
              ))}
          </RecipesSection>
          <ComplexSetsItems>
            <Title>Complex sets</Title>
            <ComplexSets />
          </ComplexSetsItems>
        </AllItems>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;

const AllItems = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-right: 2rem;
`;

const ComplexSetsItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 35%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.title`
  display: flex;
  margin: 1rem;
  font-weight: 800;
  font-size: 1.5rem;
  width: 100%;
`;

const TitleSection = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CategoriesSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  min-height: 13rem;
  align-items: flex-end;
  margin-bottom: 2rem;
  overflow-x: scroll;

  ::-webkit-scrollbar-thumb {
  }

  ::-webkit-scrollbar-thumb:hover {
    color: black;
  }

  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-track {
  }
`;

const RecipesSection = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 50%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const RecipePopup = styled.div`
  display: flex;
  min-width: 20rem;
  min-height: 25rem;
  flex-direction: column;
  align-items: center;
  height: 16.25rem;
  padding: 2rem;
  border-radius: 3%;
  background-color: rgb(21, 34, 56);
  color: white;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const AddRecipe = styled.button`
  border-radius: 50%;
  height: 10rem;
  width: 10rem;
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0.5);
  color: white;
  font-size: 2.5rem;
  margin-top: 3rem;
`;
