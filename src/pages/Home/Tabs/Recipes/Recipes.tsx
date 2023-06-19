import React from "react";
import styled from "styled-components";
import { Recipe } from "./Recipe";
import { CategoriesItem } from "./CategoriesItem";

export const Recipes = () => {
  const recpiesArray = [
    {
      id: 1,
      title: "Grilled Chicken with Mixed Vegetables",
      description:
        "A lean protein and veggie-packed meal that is perfect for a post-workout dinner",
      kcal: 400,
      time: 20,
      image: "./assets/recipe-1.svg",
    },
    {
      id: 2,
      title: "Beef Stir-Fry",
      description: "A quick and easy meal that is high protein and fiber.",
      kcal: 400,
      time: 20,
      image: "./assets/recipe-2.svg",
    },
    {
      id: 3,
      title: "Beef Stir-Fry",
      description: "A quick and easy meal that is high protein and fiber.",
      kcal: 400,
      time: 20,
      image: "./assets/recipe-2.svg",
    },
    {
      id: 4,
      title: "Beef Stir-Fry",
      description: "A quick and easy meal that is high protein and fiber.",
      kcal: 400,
      time: 20,
      image: "./assets/recipe-2.svg",
    },
  ];

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
        <Title>All items</Title>
        <RecipesSection>
          {recpiesArray.map((el) => (
            <Recipe
              key={el.id}
              title={el.title}
              description={el.description}
              kcal={el.kcal}
              time={el.time}
              image={el.image}
            />
          ))}
        </RecipesSection>
      </Content>
    </Container>
  );
};

const Title = styled.title`
  display: flex;
  margin: 1rem;
  font-weight: 800;
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
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  font-weight: 700;
`;
const CategoriesSection = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 13rem;
  align-items: flex-end;
  margin-bottom: 2rem;
`;
const RecipesSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;
