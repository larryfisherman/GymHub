import React from "react";
import styled from "styled-components";
import axios from "axios";
import { RecipeDetailsStep } from "./RecipeDetailsStep";
import { RecipeDetailsIngredient } from "./RecipeDetailsIngredient";
import { addStep } from "./utils/addStep";
import { RecipeDetailsCategories } from "./RecipeDetailsCategories";
import { InfinitySpin } from "react-loader-spinner";
import { useRecipeDetailsData } from "./hooks/useRecipeDetailsData";
import { RecipeIngredientsPopup } from "./RecipeIngredientsPopup";
import { sumMacroElements } from "./utils/sumMacroElements";
import moment from "moment";

interface Props {
  id: number;
  setShowRecipeDetails: React.Dispatch<React.SetStateAction<boolean>>;
  getRecipes: () => void;
}

export const RecipeDetailsEdit = ({
  id,
  setShowRecipeDetails,
  getRecipes,
}: Props) => {
  const {
    recipeData,
    setRecipeData,
    loading,
    categories,
    steps,
    setSteps,
    ingredients,
    user,
    showRecipeIngredientsPopup,
    setShowRecipeIngredientsPopup,
    selectedIngredients,
    setSelectedIngredients,
    activeCategory,
    setActiveCategory,
  } = useRecipeDetailsData(id);

  const { totalFat, totalCarbo, totalKcal, totalProteins } =
    sumMacroElements(selectedIngredients);

  return (
    <Container>
      {loading ? (
        <InfinitySpin />
      ) : (
        <Content>
          {showRecipeIngredientsPopup && (
            <RecipeIngredientsPopup
              ingredients={ingredients}
              setShowRecipeIngredientsPopup={setShowRecipeIngredientsPopup}
              selectedIngredients={selectedIngredients}
              setSelectedIngredients={setSelectedIngredients}
            />
          )}
          <RecipeActions>
            <Button
              onClick={() => {
                if (id) {
                  return axios
                    .put(`https://localhost:44390/api/recipes/${id}`, {
                      ...recipeData,
                      categoryId: activeCategory,
                      recipeSteps: steps,
                      recipeIngredients: selectedIngredients,
                    })
                    .finally(() => {
                      setShowRecipeDetails(false);
                      getRecipes();
                    });
                }

                axios
                  .post("https://localhost:44390/api/recipes", {
                    ...recipeData,
                    categoryId: activeCategory,
                    recipeSteps: steps,
                    recipeIngredients: selectedIngredients,
                  })
                  .finally(() => {
                    setShowRecipeDetails(false);
                    getRecipes();
                  });
              }}
            >
              SAVE
            </Button>
            <ExitIcon
              src="./assets/cross-icon.svg"
              onClick={() => setShowRecipeDetails(false)}
            />
          </RecipeActions>
          <UpperSection>
            <RightSection>
              <DishNameInput
                value={recipeData?.title ? recipeData.title : ""}
                placeholder="The name of the dish"
                onChange={(e) =>
                  setRecipeData((prevState: any) => ({
                    ...prevState,
                    title: e.target.value,
                  }))
                }
              />
              <AuthorAndDateSection>
                <AuthorInput
                  placeholder="Author"
                  defaultValue={user ? user.user.name : "Unknown"}
                  disabled
                />
                <Date
                  placeholder="Date"
                  defaultValue={
                    recipeData?.createdDate
                      ? moment(recipeData.createdDate).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )
                      : "Unknown"
                  }
                  disabled
                />
              </AuthorAndDateSection>
              <Categories>
                {categories
                  .filter((category: any) => category.categoryId !== 1)
                  .map(({ categoryId, name, active }: any) => (
                    <RecipeDetailsCategories
                      key={categoryId}
                      id={categoryId}
                      name={name}
                      setActiveCategory={setActiveCategory}
                      active={activeCategory === categoryId}
                    />
                  ))}
              </Categories>
              <Description
                value={
                  recipeData?.description ? recipeData.recipe.description : ""
                }
                placeholder="Description"
                onChange={(e) =>
                  setRecipeData((prevState: any) => ({
                    ...prevState,
                    description: e.target.value,
                  }))
                }
              />
            </RightSection>
          </UpperSection>
          <BottomSection>
            <BottomLeftSection>
              <MakroSection>
                <MakroItem style={{ backgroundColor: "#846075" }}>
                  {totalKcal}g kcal
                </MakroItem>
                <MakroItem style={{ backgroundColor: "#FF9800" }}>
                  {totalCarbo}g carbs
                </MakroItem>
                <MakroItem style={{ backgroundColor: "#A5C882" }}>
                  {totalProteins}g protein
                </MakroItem>
                <MakroItem style={{ backgroundColor: "#AF5D63" }}>
                  {totalFat}g fat
                </MakroItem>
              </MakroSection>
              <IngrediensSection>
                <Title>Ingrediens (per serving)</Title>
                {selectedIngredients.map((el: any) => {
                  const isActive = selectedIngredients.find(
                    (selectedIngredient: any) =>
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
                      style={{
                        border: isActive
                          ? "2px solid #FF9800"
                          : "2px solid transparent",
                        cursor: "pointer",
                      }}
                    />
                  );
                })}
                <Separator />
                <AddIngredient
                  onClick={() => setShowRecipeIngredientsPopup(true)}
                >
                  + Add Ingredient
                </AddIngredient>
                <Separator />
              </IngrediensSection>
            </BottomLeftSection>
            <BottomRightSection>
              {steps?.map(({ title, id, description }: any) => (
                <RecipeDetailsStep
                  key={id}
                  title={title}
                  id={id}
                  description={description}
                  steps={steps}
                  setSteps={setSteps}
                />
              ))}
              <AddStep
                onClick={() => {
                  const addSteps = addStep(steps);
                  setSteps([...steps, addSteps]);
                }}
              >
                + Add Step
              </AddStep>
            </BottomRightSection>
          </BottomSection>
        </Content>
      )}
    </Container>
  );
};
const RecipeActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 1rem;
  margin-right: 2rem;
`;

const Button = styled.button`
  display: flex;
  align-self: flex-end;
  color: white;
  height: 2rem;
  width: 3rem;
  margin-right: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  border: 1px solid transparent;
  background-color: #ff9800;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
  }
`;

const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Description = styled.input`
  width: 100%;
  padding: 5px;
`;

const Separator = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  opacity: 0.6;
`;

// BOTTOM LOWER STYLES

const BottomLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const MakroSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: white;
  margin-bottom: 1rem;
`;

const IngrediensSection = styled.div`
  background-color: white;
  padding: 1rem;
  overflow-y: scroll;
`;

const Title = styled.span`
  display: flex;
  margin-left: 3rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
`;

const AddIngredient = styled.span`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  margin-left: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

const MakroItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  color: white;
  font-weight: 550;
`;

// -------

// LOWER RIGHT SECTION

const BottomRightSection = styled.div`
  width: 45%;
  background-color: white;
  padding: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  overflow-y: scroll;
`;

const AddStep = styled(AddIngredient)`
  margin-left: 0;
`;

// ------

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  height: 100%;
`;

const RightSection = styled.div`
  width: 40%;
`;

const UpperSection = styled.div`
  width: 100%;
  padding: 3rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const DishNameInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 1rem;
`;
const AuthorAndDateSection = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;
const AuthorInput = styled.input`
  width: 45%;
  padding: 5px;
`;
const Date = styled.input`
  width: 45%;
  padding: 5px;
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 333;
  overflow: hidden;
`;
const Content = styled.div`
  width: 88.5%;
  height: 100%;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 30px;
  overflow-y: scroll;
`;

const ExitIcon = styled.img`
  display: flex;
  align-self: flex-end;
  color: black;
  height: 2rem;
  width: 2rem;

  &:hover {
    cursor: pointer;
  }
`;
