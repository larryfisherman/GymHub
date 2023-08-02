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
    const activeExercisesArray = [...new Set([...activeExercises])];

    const active = activeExercisesArray.find((el: number) => el === id);

    if (active) setIsActive(true);
  };

  const handleActiveChange = () => {
    if (!isActive) {
      const updatedExercises = activeExercises.filter(
        (el: number) => el !== id
      );
      setActiveExercises(updatedExercises);
    } else {
      setActiveExercises([...activeExercises, id]);
    }
  };

  useEffect(() => {
    handleActiveChange();
  }, [isActive]);

  useEffect(() => {
    checkIfActive();
  }, []);

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
