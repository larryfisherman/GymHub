import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  id: number;
  setActiveExercises: any;
  activeExercises: any;
}

export const WorkoutExercise = ({
  title,
  id,
  activeExercises,
  setActiveExercises,
}: Props) => {
  const [isActive, setIsActive] = useState(false);

  const checkIfActive = () => {
    const active = activeExercises.find((el: any) => el === id);
    if (active) setIsActive(true);
  };

  const handleActiveChange = () => {
    if (isActive) return setActiveExercises(() => [...activeExercises, id]);

    const elementIndex = activeExercises.indexOf(
      activeExercises.find((el: any) => el === id)
    );

    const newState = [
      ...new Set([
        ...activeExercises.slice(0, elementIndex),
        ...activeExercises.slice(elementIndex + 1),
      ]),
    ];

    setActiveExercises(newState);
  };

  useEffect(() => {
    handleActiveChange();
  }, [isActive]);

  useEffect(() => {
    checkIfActive();
  }, [activeExercises]);

  return (
    <Container
      onClick={() => setIsActive(!isActive)}
      style={isActive ? { border: "2px solid #FF9800" } : {}}
    >
      <Content>
        <ExerciseTitle>{title}</ExerciseTitle>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  margin-bottom: 2rem;
  height: 10rem;
  border: 2px solid transparent;
`;
const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const ExerciseTitle = styled.h3`
  display: flex;
  font-size: 1.5rem;
`;
