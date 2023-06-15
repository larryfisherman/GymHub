import React from "react";
import styled from "styled-components";

export const Recipes = () => {
  const recpiesArray = [
    {
      id: 1,
      title: "Grilled Chicken with Mixed Vegetables",
      description:
        "A lean protein and veggie-packed meal that is perfect for a post-workout dinner",
      kcalBurned: "400kcal",
      time: "20 min",
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
`;

const TitleSection = styled.div``;
const CategoriesSection = styled.div``;
