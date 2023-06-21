import React from "react";
import styled from "styled-components";
import { ComplexSetsItem } from "./ComplexSetsItem";

export const ComplexSets = () => {
  const complexSetsItems = [
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
        {complexSetsItems.map((el) => (
          <ComplexSetsItem
            key={el.id}
            title={el.title}
            description={el.description}
            kcal={el.kcal}
            time={el.time}
            image={el.image}
          />
        ))}
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
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;
