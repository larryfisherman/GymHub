import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  favourite: boolean;
}

export const Workout = ({ title, favourite }: Props) => {
  return (
    <Container>
      <Content>
        <TitleSection>
          <span>{title}</span>
          <HeartIcon
            src={
              favourite
                ? "./assets/filled-heart.svg"
                : "./assets/unfilled-heart.svg"
            }
          />
        </TitleSection>
        <DescriptionSection>
          <span>20 minut</span>
          <span>400 kcal</span>
        </DescriptionSection>
        <StartButton>START</StartButton>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Content = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: 3rem;
  border-radius: 3%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TitleSection = styled.div`
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

const HeartIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const DescriptionSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;

  span {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StartButton = styled.button`
  display: flex;
  margin-top: 5rem;
  width: 10rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 3%;
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
