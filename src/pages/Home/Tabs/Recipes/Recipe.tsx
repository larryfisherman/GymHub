import React from "react";
import styled from "styled-components";

export const Recipe = () => {
  return (
    <Container>
      <Content>
        <Title>Grilled Chicken with Mixed Vegetables</Title>
        <Description>
          A lean protein and veggie-packed meal that is perfect for a
          post-workout dinner.
        </Description>
        <CaloriesAndTimeSection></CaloriesAndTimeSection>
        <SeeMoreButton>See More</SeeMoreButton>
      </Content>
      ;
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Content = styled.div``;

const Title = styled.title``;

const Description = styled.span``;

const CaloriesAndTimeSection = styled.div``;

const SeeMoreButton = styled.button``;
