import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  description: string;
  kcal: number;
  time: number;
  image: string;
}

export const Recipe = ({ title, description, kcal, time, image }: Props) => {
  return (
    <Container>
      <Image src={image} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <CaloriesAndTimeSection>
          {kcal} kcal {time} minutes
        </CaloriesAndTimeSection>
        <SeeMoreButton>See More</SeeMoreButton>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 45%;
  height: 25rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: 80%;
  height: 100%;
  min-height: 20rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1.875rem;
  margin-top: 3rem;
  border-radius: 3%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.title`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 100%;

    span {
      width: 100%;
      display: inline-block;
      white-space: nowrap;
    }
  }
`;

const Description = styled.span`
  display: flex;
  justify-content: space-between;
  width: 80%;

  span {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const CaloriesAndTimeSection = styled.div``;

const SeeMoreButton = styled.button`
  display: flex;
  margin-top: 5rem;
  width: 6rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 4%;
  border: none;
  background-color: orange;
  color: white;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Image = styled.img`
  position: relative;
  width: 12rem;
  left: 8rem;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 3rem;

  @media (max-width: 768px) {
    left: 0;
  }
`;
