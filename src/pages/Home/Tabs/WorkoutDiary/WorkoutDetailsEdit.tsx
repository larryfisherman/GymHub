import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";

import { useSelector } from "react-redux";
import { selectUser } from "../../../../store/userSlice";
import { WorkoutDetailsSetsAndRepsItem } from "./WorkoutDetailsSetsAndRepsItem";
import { selectExercises } from "../../../../store/exercisesSlice";
import { WorkoutExercise } from "./WorkoutExercise";
import { InfinitySpin } from "react-loader-spinner";
import { useWorkoutDetailsData } from "./hooks/useWorkoutDetailsData";
import { WorkoutDetailsEditTimeAndKcal } from "./WorkoutDetailsEditTimeAndKcal";

interface Props {
  id: number;
  setShowWorkoutPopup: any;
  getWorkouts: any;
}

export const WorkoutDetailsEdit = ({
  id,
  setShowWorkoutPopup,
  getWorkouts,
}: Props) => {
  const {
    loading,
    setLoading,
    workoutData,
    setsAndReps,
    activeExercises,
    setWorkoutData,
    setSetsAndReps,
    setActiveExercises,
  } = useWorkoutDetailsData(id);

  const exercises = useSelector(selectExercises);
  const user = useSelector(selectUser);

  return (
    <Container>
      {loading ? (
        <SpinnerWrapper>
          <InfinitySpin />
        </SpinnerWrapper>
      ) : (
        <Content>
          <RecipeActions>
            <Button
              onClick={() => {
                if (id) {
                  return axios
                    .put(`http://gymhub.azurewebsites.net/api/workouts/${id}`, {
                      ...workoutData,
                      author: user && user.user.name,
                      workoutExercises: setsAndReps,
                    })
                    .then(() => setLoading(true))
                    .finally(() => {
                      getWorkouts();
                      setShowWorkoutPopup(false);
                    });
                }
                axios
                  .post("http://gymhub.azurewebsites.net/api/workouts", {
                    ...workoutData,
                    workoutExercises: setsAndReps,
                  })
                  .then(() => setLoading(true))
                  .finally(() => {
                    setShowWorkoutPopup(false);
                    getWorkouts();
                  });
              }}
            >
              SAVE
            </Button>
            <ExitIcon
              src="./assets/cross-icon.svg"
              onClick={() => setShowWorkoutPopup(false)}
            />
          </RecipeActions>
          <UpperSection>
            <RightSection>
              <DishNameInput
                value={workoutData.title ? workoutData.title : ""}
                placeholder="The name of the workout"
                onChange={(e) =>
                  setWorkoutData((prevState: any) => ({
                    ...prevState,
                    title: e.target.value,
                  }))
                }
              />
              <AuthorAndDateSection>
                <AuthorInput
                  placeholder="Author"
                  defaultValue={user && user.user.name}
                  disabled
                />
                <Date
                  placeholder="Date"
                  disabled
                  value={
                    workoutData.createdDate
                      ? moment(workoutData.createdDate).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )
                      : "Unknown"
                  }
                />
              </AuthorAndDateSection>
              <Description
                value={workoutData.description ? workoutData.description : ""}
                placeholder="Description"
                onChange={(e) =>
                  setWorkoutData((prevState: any) => ({
                    ...prevState,
                    description: e.target.value,
                  }))
                }
              />
            </RightSection>
          </UpperSection>
          <BottomSection>
            <BottomLeftSection>
              <ExercisesSection>
                <Title>Exercises</Title>
                {exercises.map(({ exerciseId, title }: any) => (
                  <WorkoutExercise
                    key={exerciseId}
                    id={exerciseId}
                    title={title}
                    activeExercises={activeExercises}
                    setActiveExercises={setActiveExercises}
                  />
                ))}
              </ExercisesSection>
            </BottomLeftSection>
            <BottomRightSection>
              <WorkoutDetailsEditTimeAndKcal
                data={workoutData}
                setData={setWorkoutData}
              />
              <SetsAndRepsSection>
                <SetsAndRepsTitle>Sets & Reps</SetsAndRepsTitle>
                <SetsAndReps>
                  {setsAndReps.map((el: any) => (
                    <WorkoutDetailsSetsAndRepsItem
                      key={el.exerciseId}
                      id={el.exerciseId}
                      title={el.title}
                      sets={el.sets}
                      repeats={el.repeats}
                      setSetsAndReps={setSetsAndReps}
                    />
                  ))}
                </SetsAndReps>
              </SetsAndRepsSection>
            </BottomRightSection>
          </BottomSection>
        </Content>
      )}
    </Container>
  );
};

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const SetsAndRepsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: white;
  height: 100%;
  padding: 1.5rem;
`;

const SetsAndReps = styled.div`
  width: 100%;
  display: flex;
  flex-direction; column;
  flex-wrap: wrap;
  margin-top: 1rem;
  `;

const SetsAndRepsTitle = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

const RecipeActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 1rem;
  margin-right: 2rem;
`;

const Button = styled.button`
  display: flex;
  align-self: flex-end;
  color: white;
  height: 2rem;
  width: 3rem;
  margin-right: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  border: 1px solid transparent;
  background-color: #ff9800;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
  }
`;

const Description = styled.input`
  width: 100%;
  padding: 5px;
`;

const BottomLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const ExercisesSection = styled.div`
  background-color: white;
  padding: 1rem;
`;

const Title = styled.span`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

// -------

// LOWER RIGHT SECTION

const BottomRightSection = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

// ------

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  height: 100%;
`;

const RightSection = styled.div`
  width: 40%;
`;

const UpperSection = styled.div`
  width: 100%;
  padding: 3rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const DishNameInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 1rem;
`;
const AuthorAndDateSection = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;
const AuthorInput = styled.input`
  width: 45%;
  padding: 5px;
`;
const Date = styled.input`
  width: 45%;
  padding: 5px;
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 333;
  overflow: hidden;
`;
const Content = styled.div`
  width: 88.5%;
  height: 100%;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 30px;
  overflow-y: scroll;
`;

const ExitIcon = styled.img`
  display: flex;
  align-self: flex-end;
  color: black;
  height: 2rem;
  width: 2rem;

  &:hover {
    cursor: pointer;
  }
`;
