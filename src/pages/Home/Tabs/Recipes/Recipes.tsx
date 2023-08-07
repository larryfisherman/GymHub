import React from "react";
import styled from "styled-components";
import { Recipe } from "./Recipe";
import { CategoriesItem } from "./CategoriesItem";
import { ComplexSets } from "./ComplexSets";
import { InfinitySpin } from "react-loader-spinner";
import { RecipeDetailsEdit } from "./RecipeDetailsEdit";
import { useRecipesData } from "./hooks/useRecipesData";
import { Scrollbar } from "../../../../components/Scrollbar/Scrollbar";

export const Recipes = () => {
  const {
    loading,
    recipes,
    categories,
    showRecipeDetails,
    recipeDetailsId,
    selectedCategory,
    setShowRecipeDetails,
    setSelectedCategory,
    setRecipeDetailsId,
    getRecipes,
  } = useRecipesData();

  const filteredRecipes =
    selectedCategory === 1
      ? recipes
      : recipes.filter((recipe: any) => recipe.categoryId === selectedCategory);

  return (
    <>
      <Container>
        {showRecipeDetails && (
          <RecipeDetailsEdit
            id={recipeDetailsId}
            setShowRecipeDetails={setShowRecipeDetails}
            getRecipes={getRecipes}
          />
        )}
        {loading ? (
          <SpinnerWrapper>
            <InfinitySpin />
          </SpinnerWrapper>
        ) : (
          <Content>
            <PreTitle>Your Delicious</PreTitle>
            <TopTitle>Recipes</TopTitle>
            <CategoriesSection>
              {categories.map((el: any) => (
                <CategoriesItem
                  key={el.categoryId}
                  id={el.categoryId}
                  title={el.name}
                  setSelectedCategory={setSelectedCategory}
                  isActive={selectedCategory === el.categoryId}
                  image={`./assets/recipe-${el.categoryId}.svg`}
                />
              ))}
            </CategoriesSection>
            <AllItems>
              <RecipesSection>
                <RecipeTitles>All items</RecipeTitles>
                <Scrollbar
                  style={{
                    display: filteredRecipes.length > 3 ? "flex" : "none",
                  }}
                >
                  <AddRecipe>
                    <RecipeTitles>Add New Recipe</RecipeTitles>
                    <AddRecipeButton
                      onClick={() => {
                        setRecipeDetailsId(0);
                        setShowRecipeDetails(true);
                      }}
                    >
                      +
                    </AddRecipeButton>
                  </AddRecipe>
                  {recipes &&
                    filteredRecipes.map((el: any) => {
                      return (
                        <Recipe
                          key={el.recipeId}
                          id={el.recipeId}
                          category={el.categoryId}
                          title={el.title}
                          description={el.description}
                          kcal={el.kcal}
                          time={el.timeToBeDone}
                          setShowRecipeDetails={setShowRecipeDetails}
                          setRecipeDetailsId={setRecipeDetailsId}
                          getRecipes={getRecipes}
                        />
                      );
                    })}
                </Scrollbar>
              </RecipesSection>
              <ComplexSetsItems>
                <ComplexSetsTitle>Complex sets</ComplexSetsTitle>
                <ComplexSets />
              </ComplexSetsItems>
            </AllItems>
          </Content>
        )}
      </Container>
    </>
  );
};

const TopTitle = styled.span`
  display: flex;
  font-size: 2.5rem;
  font-weight: bold;
`;
const PreTitle = styled.span`
  display: flex;
  font-size: 2rem;
  color: lightgray;
  font-weight: 500;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
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
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
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

const RecipeTitles = styled.title`
  display: flex;
  margin: 1rem;
  font-weight: 800;
  font-size: 1.5rem;
  width: 100%;
`;

const ComplexSetsTitle = styled(RecipeTitles)`
  padding-left: 5rem;
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
  justify-content: space-between;
  width: 60%;
  height: 100vh;
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

const AddRecipe = styled.div`
  display: flex;
  width: 20rem;
  height: 28rem;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
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

const AddRecipeButton = styled.button`
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
