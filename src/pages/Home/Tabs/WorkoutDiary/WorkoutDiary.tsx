import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Workout } from "./Workout";
import axios from "axios";
import { WorkoutPopup } from "./WorkoutPopup";

interface WorkoutProps {
  title: string;
  favourite: boolean;
  id: number;
  kcal: number;
  timeToBeDone: number;
}

export const WorkoutDiary = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workoutData, setWorkoutData] = useState([]);
  const [showWorkoutPopup, setShowWorkoutPopup] = useState(false);
  const [workoutId, setWorkoutId] = useState(0);

  useEffect(() => {
    axios.get("https://localhost:44390/api/workouts").then((res) => {
      setWorkouts(res.data);
    });
  }, []);

  return (
    <Container>
      {showWorkoutPopup && (
        <WorkoutPopup
          id={workoutId}
          setShowWorkoutPopup={setShowWorkoutPopup}
        />
      )}
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
                workoutData={workoutData}
                setWorkoutData={setWorkoutData}
                setShowWorkoutPopup={setShowWorkoutPopup}
              />
            )
          )}
        </Workouts>
      </Content>
    </Container>
  );
};

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

const Workouts = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
`;

const AddWorkout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 39rem;
  height: 20rem;
  padding: 30px;
  border-radius: 5%;
  background: url("./assets/workout-4.svg") center center / cover;
  color: white;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TitleSection = styled.div`
  display: flex;
  align-self: flex-start;
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

const Title = styled.div``;
