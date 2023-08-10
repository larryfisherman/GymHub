import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Exercise } from "./Exercise";
import axios from "axios";

interface ExerciseProps {
  exerciseId: number;
  title: string;
  sets: number;
  repeats: number;
}

export const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get("https://gymhub.azurewebsites.net/api/exercises").then((res) => {
      setExercises(res.data);
    });
  }, []);

  return (
    <Container>
      <Content>
        <TitleSection>
          <PreTitle>Explore</PreTitle>
          <Title>Exercise Library</Title>
        </TitleSection>
        <ExercisesSection>
          {exercises.map((el: ExerciseProps) => (
            <Exercise key={el.exerciseId} id={el.exerciseId} title={el.title} />
          ))}
        </ExercisesSection>
      </Content>
    </Container>
  );
};

const ExercisesSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

const TitleSection = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const PreTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 100;
`;
const Title = styled.span`
  font-size: 2rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
