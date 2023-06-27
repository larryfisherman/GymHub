import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Workout } from "./Workout";
import axios from "axios";

interface WorkoutProps {
  title: string;
  favourite: boolean;
  id: number;
  kcal: number;
  timeToBeDone: number;
}

export const WorkoutDiary = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:44390/api/workouts").then((res) => {
      console.log(res.data);
      setWorkouts(res.data);
    });
  }, []);

  return (
    <Container>
      <Content>
        <Title>MY WORKOUTS</Title>
        <Workouts>
          <AddWorkout>
            <TitleSection>
              <span>Add Workout</span>
            </TitleSection>
            <AddWorkoutButton>+</AddWorkoutButton>
          </AddWorkout>
          {workouts.map(
            ({ title, favourite, id, timeToBeDone, kcal }: WorkoutProps) => (
              <Workout
                key={id}
                title={title}
                favourite={favourite}
                kcal={kcal}
                timeToBeDone={timeToBeDone}
              />
            )
          )}
        </Workouts>
      </Content>
    </Container>
  );
};

const AddWorkout = styled.div`
  width: 40%;
  height: 100%;
  color: white;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: 3rem;
  border-radius: 5%;
  background: url("./assets/workout-4.svg") center center / cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TitleSection = styled.div`
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

const AddWorkoutButton = styled.button`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const Title = styled.div``;
const Workouts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
