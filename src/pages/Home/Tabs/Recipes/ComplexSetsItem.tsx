import React from "react";
import styled from "styled-components";

interface Props {
  image: string;
  title: string;
  description: string;
  kcal: number;
  time: number;
}

export const ComplexSetsItem = ({
  image,
  title,
  description,
  kcal,
  time,
}: Props) => {
  return (
    <Container>
      <Image src={image} />
      <Content>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <CaloriesAndTimeSection>
            <Calories>{kcal} kcal</Calories>
            <Time>{time} minutes</Time>
          </CaloriesAndTimeSection>
          <SeeMoreButton>SEE MORE</SeeMoreButton>
        </Content>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  display: flex;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.875rem;
  background-color: rgb(21, 34, 56);
  color: white;
  border-radius: 3%;
`;
const Image = styled.img`
  position: relative;
  height: 12rem;
  border-radius: 50%;
  border: 1px solid black;
  z-index: 2;

  @media (max-width: 768px) {
    left: 0;
    top: 5rem;
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
  padding-left: 3.5rem;
  span {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 80%;
    padding-left: 0;
  }
`;
const CaloriesAndTimeSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;
const Calories = styled.div``;
const Time = styled.div``;
const SeeMoreButton = styled.div`
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
