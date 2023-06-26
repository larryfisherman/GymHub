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
        <Image src={image} loading="lazy" />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <CaloriesAndTimeSection>
          <Calories>{kcal} kcal</Calories>
          <Time>{time ? ` ${time} minutes` : null}</Time>
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
  display: flex;
  width: 40%;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin-top: 0;
    left: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  min-height: 25rem;
  min-width: 20rem;
  padding: 1.875rem;
  border-radius: 3%;
  background-color: rgb(21, 34, 56);
  color: white;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.title`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  margin-bottom: 2rem;

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
  overflow-wrap: break-word;
  font-size: 1rem;
  margin: 1rem;
  max-height: 5rem;
  overflow-y: scroll;

  @media (max-width: 768px) {
    width: 80%;
    padding-left: 0;
  }

  ::-webkit-scrollbar-thumb {
  }

  ::-webkit-scrollbar-thumb:hover {
    color: black;
  }

  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-track {
  }
`;

const CaloriesAndTimeSection = styled.div`
  display: flex;
  span {
    margin-left: 1rem;
  }
  @media (max-width: 768px) {
    padding-left: 0;
  }
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
  height: 12rem;
  border-radius: 50%;
  border: 1px solid black;
  z-index: 2;
  top: -4rem;
`;
