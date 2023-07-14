import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  id: number;
  favourite: boolean;
  timeToBeDone: number;
  kcal: number;
  setShowEditWorkoutDetails: any;
  setWorkoutId: any;
}

export const Workout = ({
  title,
  favourite,
  timeToBeDone,
  kcal,
  setShowEditWorkoutDetails,
  setWorkoutId,
  id,
}: Props) => {
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
            onClick={() => {
              console.log(!favourite);
            }}
          />
        </TitleSection>
        <DescriptionSection>
          <span>{timeToBeDone ? `${timeToBeDone} minutes` : null}</span>
          <span>{kcal ? `${kcal} kcal` : null}</span>
        </DescriptionSection>
        <StartButton
          onClick={() => {
            setShowEditWorkoutDetails(true);
            setWorkoutId(id);
          }}
        >
          SEE MORE
        </StartButton>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 39rem;
  height: 20rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: white;
  padding: 30px;
  border-radius: 5%;
  background: url("./assets/workout-4.svg") center center / cover;

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
  width: 25%;

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
  width: 12rem;
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
