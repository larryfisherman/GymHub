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
      <Content>
        {/* <Image src={image} /> */}
        <Title>{title}</Title>
        <Description>{description}</Description>
        <CaloriesAndTimeSection>
          <Calories>{kcal} kcal</Calories>
          <Time>{time} minutes</Time>
        </CaloriesAndTimeSection>
        <SeeMoreButton>SEE MORE</SeeMoreButton>
      </Content>
    </Container>
  );
};

const Calories = styled.span`
  color: orange;
`;
const Time = styled.span``;

const Container = styled.div`
  width: 15%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20rem;
  min-width: 20rem;
  padding: 1.875rem;
  border-radius: 3%;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(21, 34, 56);
  color: white;
  overflow-x: wrap;

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
  font-size: 1rem;
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
  width: 100%;
  position: relative;
  overflow-wrap: break-word;
  font-size: 0.7rem;

  span {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const CaloriesAndTimeSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;
`;

const SeeMoreButton = styled.button`
  display: flex;
  margin-top: 1rem;
  width: 7rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 5%;
  border: none;
  background-color: rgb(144, 238, 144);
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
  width: 10rem;
  border-radius: 50%;
  border: 1px solid black;
  z-index: 2;

  @media (max-width: 768px) {
    left: 0;
  }
`;
