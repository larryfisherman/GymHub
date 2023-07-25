import React from "react";
import styled from "styled-components";
import { Workout } from "./Workout";
import { WorkoutDetailsEdit } from "./WorkoutDetailsEdit";
import { InfinitySpin } from "react-loader-spinner";
import { useWorkoutDiaryData } from "./hooks/useWorkoutDiaryData";

interface WorkoutProps {
  title: string;
  favourite: boolean;
  workoutId: number;
  kcal: number;
  timeToBeDone: number;
}

export const WorkoutDiary = () => {
  const {
    workouts,
    showEditWorkoutDetails,
    setShowEditWorkoutDetails,
    workoutId,
    setWorkoutId,
    loading,
  } = useWorkoutDiaryData();

  return (
    <Container>
      {showEditWorkoutDetails && (
        <WorkoutDetailsEdit
          id={workoutId}
          setShowWorkoutPopup={setShowEditWorkoutDetails}
        />
      )}
      {loading ? (
        <SpinnerWrapper>
          <InfinitySpin />
        </SpinnerWrapper>
      ) : (
        <Content>
          <Title>MY WORKOUTS</Title>
          <Workouts>
            <AddWorkout>
              <TitleSection>
                <span>Add Workout</span>
              </TitleSection>
              <AddWorkoutButton
                onClick={() => {
                  setWorkoutId(0);
                  setShowEditWorkoutDetails(true);
                }}
              >
                +
              </AddWorkoutButton>
            </AddWorkout>
            {workouts.map(
              ({
                title,
                favourite,
                workoutId,
                timeToBeDone,
                kcal,
              }: WorkoutProps) => (
                <Workout
                  key={workoutId}
                  id={workoutId}
                  title={title}
                  favourite={favourite}
                  kcal={kcal}
                  timeToBeDone={timeToBeDone}
                  setShowEditWorkoutDetails={setShowEditWorkoutDetails}
                  setWorkoutId={setWorkoutId}
                />
              )
            )}
          </Workouts>
        </Content>
      )}
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
  height: 100vh;
  padding: 30px;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
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
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0.5);
  color: white;
  font-size: 2.5rem;
  margin-top: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.div``;
