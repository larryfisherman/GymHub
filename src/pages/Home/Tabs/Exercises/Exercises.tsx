import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Exercise } from "./Exercise";
import axios from "axios";
import { NotifyUser } from "../../../../helpers/NotifyUser/NotifyUser";
import { InfinitySpin } from "react-loader-spinner";
import { ExerciseDetailsPopup } from "./ExerciseDetailsPopup/ExerciseDetailsPopup";

interface ExerciseProps {
  exerciseId: number;
  title: string;
  sets: number;
  repeats: number;
}

export const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showExerciseDetails, setShowExerciseDetails] = useState(false);
  const [exerciseId, setExerciseId] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://gymhub.azurewebsites.net/api/exercises")
      .then((res) => setExercises(res.data))
      .catch((err) => NotifyUser(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      {showExerciseDetails && (
        <ExerciseDetailsPopup
          id={exerciseId}
          setShowExerciseDetails={setShowExerciseDetails}
        />
      )}
      {loading ? (
        <SpinnerWrapper>
          <InfinitySpin />
        </SpinnerWrapper>
      ) : (
        <Content>
          <TitleSection>
            <PreTitle>Explore</PreTitle>
            <Title>Exercise Library</Title>
          </TitleSection>
          <ExercisesSection>
            {exercises.map((el: ExerciseProps) => (
              <Exercise
                key={el.exerciseId}
                id={el.exerciseId}
                title={el.title}
                setShowExerciseDetails={setShowExerciseDetails}
                setExerciseId={setExerciseId}
              />
            ))}
          </ExercisesSection>
        </Content>
      )}
    </Container>
  );
};

const SpinnerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

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
