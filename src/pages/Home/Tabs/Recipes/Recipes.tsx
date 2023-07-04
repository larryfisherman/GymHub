import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Recipe } from "./Recipe";
import { CategoriesItem } from "./CategoriesItem";
import { ComplexSets } from "./ComplexSets";
import { AddNewRecipePopup } from "./AddNewRecipePopup";
import RecipeDetails from "./RecipeDetails";

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [showAddRecipePopup, setShowAddRecipePopup] = useState(false);
  const [showRecipeDetails, setShowRecipeDetails] = useState(false);
  const [recipeDetailsId, setRecipeDetailsId] = useState(0);

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
    <>
      <Container>
        {/* {showAddRecipePopup && <AddNewRecipePopup />} */}
        {showRecipeDetails && (
          <RecipeDetails
            id={recipeDetailsId}
            setShowRecipeDetails={setShowRecipeDetails}
          />
        )}
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
                <AddRecipe onClick={() => setShowAddRecipePopup(true)}>
                  +
                </AddRecipe>
              </RecipePopup>
              {recipes &&
                recipes.map((el: any) => (
                  <Recipe
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    description={el.description}
                    kcal={el.kcal}
                    time={el.timeToBeDone}
                    image={"./assets/recipe-1.svg"}
                    setShowRecipeDetails={setShowRecipeDetails}
                    setRecipeDetailsId={setRecipeDetailsId}
                  />
                ))}
            </RecipesSection>
            <ComplexSetsItems>
              <ComplexSetsTitle>Complex sets</ComplexSetsTitle>
              <ComplexSets />
            </ComplexSetsItems>
          </AllItems>
        </Content>
      </Container>
    </>
  );
};

const Header = styled.div`
  width: 100%;
  height: 10%;
  background-color: black;
  position: fixed;
  z-index: 33333;
`;

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

  @media (max-width: 768px) {
    padding: 10px;
  }
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

const ComplexSetsTitle = styled(Title)`
  padding-left: 5rem;
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

  ::-webkit-scrollbar {
    height: 10px;
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
  height: 28rem;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  border-radius: 3%;
  background-color: rgb(21, 34, 56);
  color: white;
  margin-bottom: 3rem;
  margin-top: 1rem;

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

  &:hover {
    cursor: pointer;
  }
`;
