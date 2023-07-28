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

  const [isKcalEdit, setIsKcalEdit] = useState(false);
  const [isTimeEdit, setIsTimeEdit] = useState(false);

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
                    .put(`https://localhost:44390/api/workouts/${id}`, {
                      ...workoutData,
                      workoutExercises: setsAndReps,
                    })
                    .then(() => setLoading(true))
                    .finally(() => setShowWorkoutPopup(false));
                }
                axios
                  .post("https://localhost:44390/api/workouts", {
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
            <ImageContainer>
              <Image
              // src={
              //   recipeData.imageSrc
              //     ? recipeData.imageSrc
              //     : "./assets/blank-recipe-photo.svg"
              // }
              />
              {/* <input type="file" onChange={showPreview} /> */}
            </ImageContainer>
            <RightSection>
              <DishNameInput
                value={workoutData.title}
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
                    id
                      ? workoutData.createdDate
                      : moment().format("MMMM Do YYYY, h:mm:ss a")
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
                {exercises.map(({ id, title }: any) => (
                  <WorkoutExercise
                    key={id}
                    id={id}
                    title={title}
                    activeExercises={activeExercises}
                    setActiveExercises={setActiveExercises}
                  />
                ))}
              </ExercisesSection>
            </BottomLeftSection>
            <BottomRightSection>
              <TimeAndKcalSection>
                <TimeAndKcalItem
                  onClick={() => setIsTimeEdit(true)}
                  style={{ backgroundColor: "#846075" }}
                >
                  <ClockIcon src="./assets/clock-icon.svg" />
                  <TimeAndKcalItemText>
                    {workoutData.timeToBeDone} min
                  </TimeAndKcalItemText>
                </TimeAndKcalItem>
                <TimeAndKcalItem
                  onClick={() => setIsKcalEdit(true)}
                  style={{ backgroundColor: "#AF5D63" }}
                >
                  <ClockIcon src="./assets/fire-kcal-icon.svg" />
                  <TimeAndKcalItemText>
                    {workoutData.kcal} kcal
                  </TimeAndKcalItemText>
                </TimeAndKcalItem>
              </TimeAndKcalSection>
              <SetsAndRepsSection>
                <SetsAndRepsTitle>Sets & Reps</SetsAndRepsTitle>
                <SetsAndReps>
                  {setsAndReps.map((el: any) => (
                    <WorkoutDetailsSetsAndRepsItem
                      key={el.id}
                      id={el.id}
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

const ClockIcon = styled.img`
  width: 2rem;
`;

const TimeAndKcalItemText = styled.span``;

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

const TimeAndKcalSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 30px;
  margin-bottom: 1rem;
  align-items: center;
`;

const TimeAndKcalItem = styled.span`
  width: 9rem;
  height: 9rem;
  margin: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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

const ImageContainer = styled.label`
  width: 50%;

  & > input {
    visibility: hidden;
    width: 0;
    height: 0;
  }
`;

const Description = styled.input`
  width: 100%;
  padding: 5px;
`;

// BOTTOM LOWER STYLES

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

const Image = styled.img`
  width: 100%;
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
