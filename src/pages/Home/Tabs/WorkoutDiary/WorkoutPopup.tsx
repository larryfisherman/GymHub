import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../store/userSlice";
import { selectExercises } from "../../../../store/exercisesSlice";
import axios from "axios";
import { Exercise } from "../Exercises/Exercise";
import { WorkoutExercise } from "./WorkoutExercise";

interface Props {
  id: number;
  setShowWorkoutPopup: any;
}

export const WorkoutPopup = ({ id, setShowWorkoutPopup }: Props) => {
  const [workoutData, setWorkoutData] = useState<any>([]);
  const [steps, setSteps] = useState<any>([]);
  const [ingrediens, setIngrediens] = useState<any[]>([]);
  const user = useSelector(selectUser);

  const exercises = useSelector(selectExercises);

  useEffect(() => {
    axios.get(`https://localhost:44390/api/workouts/${id}`).then((res) => {
      setWorkoutData(res.data);
    });
  }, []);

  //   useEffect(
  //     () =>
  //       setRecipeData((prevState: any) => ({
  //         ...prevState,
  //         category: categories.find((el) => el.active)?.title,
  //         steps,
  //         ingrediens,
  //       })),
  //     [steps, ingrediens, categories]
  //   );

  // const showPreview = (e: any) => {
  //   if (e.target.files && e.target.files[0]) {
  //     let imageFile = e.target.files[0];
  //     const reader = new FileReader();
  //     reader.onload = (x: any) => {
  //       setImage(imageFile);
  //     };
  //     reader.readAsDataURL(imageFile);
  //   }
  // };

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
              <Date placeholder="Date" />
            </AuthorAndDateSection>
            <Categories>
              {/* {categories.map(({ id, title, active }: any) => (
                <RecipeDetailsCategories
                  key={id}
                  id={id}
                  title={title}
                  setCategories={setCategories}
                  categories={categories}
                  active={active}
                />
              ))} */}
            </Categories>
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
            <MakroSection></MakroSection>
            <ExercisesSection>
              <Title>Exercises</Title>
              {/* {exercises.map(({ id, title }: any) => (
                <WorkoutExercise key={id} id={id} title={title} />
              ))} */}
              <Separator />
              <AddIngredient onClick={() => {}}>+ Add Ingredient</AddIngredient>
              <Separator />
            </ExercisesSection>
          </BottomLeftSection>
          <BottomRightSection>
            {/* {steps.map(({ title, id, description }: any) => (
              <RecipeDetailsStep
                key={id}
                title={title}
                id={id}
                description={description}
                setSteps={setSteps}
              />
            ))} */}
            <AddStep onClick={() => {}}>+ Add Step</AddStep>
          </BottomRightSection>
        </BottomSection>
      </Content>
    </Container>
  );
};

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

const ImageContainer = styled.label`
  width: 50%;

  & > input {
    visibility: hidden;
    width: 0;
    height: 0;
  }
`;

const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55%;
`;

const Description = styled.input`
  width: 100%;
  padding: 5px;
`;

const Separator = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  opacity: 0.6;
`;

// BOTTOM LOWER STYLES

const BottomLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const MakroSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: white;
  margin-bottom: 1rem;
`;

const ExercisesSection = styled.div`
  background-color: white;
  padding: 1rem;
  overflow-y: scroll;
`;

const Title = styled.span`
  display: flex;
  margin-left: 3rem;
  font-size: 2rem;
  font-weight: bold;
`;

const AddIngredient = styled.span`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  margin-left: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

const MakroItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  color: white;
  font-weight: 550;
`;

// -------

// LOWER RIGHT SECTION

const BottomRightSection = styled.div`
  width: 45%;
  background-color: white;
  padding: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  overflow-y: scroll;
`;

const AddStep = styled(AddIngredient)`
  margin-left: 0;
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
  background-color: lightgray;
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
