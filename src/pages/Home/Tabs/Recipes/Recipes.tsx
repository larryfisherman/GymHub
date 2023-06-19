import React from "react";
import styled from "styled-components";
import { Recipe } from "./Recipe";

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
  ];
  return (
    <Container>
      <Content>
        <TitleSection>
          <span>Your Delicious</span>
          <span>Recipes</span>
        </TitleSection>
        <CategoriesSection></CategoriesSection>
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

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const TitleSection = styled.div``;
const CategoriesSection = styled.div``;
const RecipesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
