import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { useSelector } from "react-redux";
import { selectUser } from "../../../../store/userSlice";
import { WorkoutDetailsSetsAndRepsItem } from "./WorkoutDetailsSetsAndRepsItem";
import { selectExercises } from "../../../../store/exercisesSlice";
import { WorkoutExercise } from "./WorkoutExercise";

interface Props {
  id: number;
  setShowWorkoutPopup: any;
}

export const WorkoutDetailsEdit = ({ id, setShowWorkoutPopup }: Props) => {
  const [workoutData, setWorkoutData] = useState<any>([]);
  const [setsAndReps, setSetsAndReps] = useState<any>([]);
  const [activeExercises, setActiveExercises] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const exercises = useSelector(selectExercises);
  const user = useSelector(selectUser);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://localhost:44390/api/workouts/${id}`)
      .then((res) => {
        setWorkoutData(res.data);
        setSetsAndReps(res.data.exercises);
        setActiveExercises(res.data.exercises.map((el: any) => el.id));
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const filteredExercises = exercises.filter((ex: any) =>
      activeExercises.includes(ex.id)
    );

    console.log(filteredExercises, "filtered");
    console.log(setsAndReps, "setsAndR");

    setSetsAndReps(filteredExercises);
  }, [activeExercises]);

  useEffect(() => {
    setWorkoutData((prevState: any) => ({
      ...prevState,
      exercises: setsAndReps,
    }));
  }, [activeExercises, setsAndReps]);

  return (
    <Container>
      <Content>
        <RecipeActions>
          <Button
            onClick={() => {
              if (id) {
                return axios
                  .put(
                    `https://localhost:44390/api/workouts/${id}`,
                    workoutData
                  )
                  .then(() => setShowWorkoutPopup(false));
              }
              axios
                .post("https://localhost:44390/api/workouts", workoutData)
                .then(() => setShowWorkoutPopup(false));
            }}
          >
            SAVE
          </Button>
          <ExitIcon
            src="./assets/cross-icon.svg"
            onClick={() => {
              setActiveExercises([]);
              setShowWorkoutPopup(false);
            }}
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
              <Date placeholder="Date" disabled />
            </AuthorAndDateSection>
            <Description
              value={workoutData.description}
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
              <TimeAndKcalItem></TimeAndKcalItem>
              <TimeAndKcalItem></TimeAndKcalItem>
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
    </Container>
  );
};

{
  /* <SetsAndRepsCounter>
                  <DecreaseButton
                    onClick={() => {
                      if (setsAndRepsCounter > 0)
                        setSetsAndRepsCounter(setsAndRepsCounter - 1);
                    }}
                  >
                    -
                  </DecreaseButton>
                  <Counter>{setsAndRepsCounter}</Counter>
                  <IncreaseButton
                    onClick={() =>
                      setSetsAndRepsCounter(setsAndRepsCounter + 1)
                    }
                  >
                    +
                  </IncreaseButton>
                </SetsAndRepsCounter> */
}

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
  background-color: white;
  margin-bottom: 1rem;
  align-items: center;
`;

const TimeAndKcalItem = styled.span`
  background-color: black;
  width: 4rem;
  height: 4rem;
  margin: 2rem;
  border-radius: 50%;
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

// const SetsAndRepsCounter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border: 1px solid black;
//   border-radius: 5%;
//   width: 7rem;
//   height: 2rem;
// `;
// const DecreaseButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 40%;
//   height: 100%;
//   background-color: transparent;
//   border: none;
//   border-right: 1px solid black;
//   background-color: orange;
//   color: white;
//   font-size: 1.5rem;
// `;
// const Counter = styled.span`
//   padding: 1rem;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const IncreaseButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: transparent;
//   border: none;
//   border-left: 1px solid black;
//   width: 40%;
//   height: 100%;
//   background-color: orange;
//   color: white;
//   font-size: 1.5rem;
// `;
