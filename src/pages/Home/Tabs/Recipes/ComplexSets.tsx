import React from "react";
import styled from "styled-components";
import { ComplexSetsItem } from "./ComplexSetsItem";
import { Recipe1, Recipe2, Recipe3 } from "assets";

export const ComplexSets = () => {
  const complexSetsItems = [
    {
      id: 1,
      title: "Grilled Chicken with Mixed Vegetables",
      description:
        "A lean protein and veggie-packed meal that is perfect for a post-workout dinner",
      kcal: 400,
      time: 20,
      image: Recipe1,
      color: "#846075",
    },
    {
      id: 2,
      title: "Beef Stir-Fry",
      description: "A quick and easy meal that is high protein and fiber.",
      kcal: 400,
      time: 20,
      image: Recipe2,
      color: "#A5C882",
    },
    {
      id: 3,
      title: "Quinoa Salad with Roasted Vegetables",
      description:
        "A hearty and filling salad that is packed with protein and fiber",
      kcal: 350,
      time: 30,
      color: "#AF5D63",
      image: Recipe3,
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
            color={el.color}
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
