import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import axios from "axios";
import { RecipeDetailsStep } from "./RecipeDetailsStep";
import { RecipeDetailsIngredient } from "./RecipeDetailsIngredient";
import { addStep } from "./utils/addStep";
import { addIngredient } from "./utils/addIngredient";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../store/userSlice";
import { RecipeDetailsCategories } from "./RecipeDetailsCategories";

interface Props {
  id: number;
  setShowRecipeDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

interface stepsStateProps {
  id: number;
  title: string;
  description: string;
}

interface ingredientsStateProps {
  id?: number;
  name: string;
  amount: number;
}

export const RecipeDetails = ({ id, setShowRecipeDetails }: Props) => {
  const [recipeData, setRecipeData] = useState<any>([]);
  const [steps, setSteps] = useState<stepsStateProps[]>([]);
  const [ingrediens, setIngrediens] = useState<any[]>([]);
  const user = useSelector(selectUser);

  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Breakfast",
      active: false,
    },
    {
      id: 2,
      title: "Lunch",
      active: false,
    },
    {
      id: 3,
      title: "Dinner",
      active: false,
    },
    {
      id: 4,
      title: "Saper",
      active: false,
    },
  ]);

  useEffect(() => {
    if (!id) return setRecipeData(null);

    axios.get(`https://localhost:44390/api/recipes/${id}`).then((res) => {
      setRecipeData(res.data);
      setIngrediens(res.data.ingrediens);
      setSteps(res.data.steps);

      const newCategories = categories.map((el) => {
        if (el.title === res.data.category) {
          return { ...el, active: true };
        }
        return el;
      });

      setCategories(newCategories);
    });
  }, []);

  useEffect(
    () =>
      setRecipeData((prevState: any) => ({
        ...prevState,
        category: categories.find((el) => el.active)?.title,
        steps,
        ingrediens,
      })),
    [steps, ingrediens, categories]
  );

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
                  .put(`https://localhost:44390/api/recipes/${id}`, recipeData)
                  .then(() => setShowRecipeDetails(false));
              }

              axios
                .post("https://localhost:44390/api/recipes", recipeData)
                .then(() => setShowRecipeDetails(false));
            }}
          >
            SAVE
          </Button>
          <ExitIcon
            src="./assets/cross-icon.svg"
            onClick={() => setShowRecipeDetails(false)}
          />
        </RecipeActions>
        <UpperSection>
          <ImageContainer>
            <Image
              src={
                recipeData.imageSrc
                  ? recipeData.imageSrc
                  : "./assets/blank-recipe-photo.svg"
              }
            />
            {/* <input type="file" onChange={showPreview} /> */}
          </ImageContainer>
          <RightSection>
            <DishNameInput
              value={recipeData.title}
              placeholder="The name of the dish"
              onChange={(e) =>
                setRecipeData((prevState: any) => ({
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
              {categories.map(({ id, title, active }: any) => (
                <RecipeDetailsCategories
                  key={id}
                  id={id}
                  title={title}
                  setCategories={setCategories}
                  categories={categories}
                  active={active}
                />
              ))}
            </Categories>
            <Description
              value={recipeData.description}
              placeholder="Description"
              onChange={(e) =>
                setRecipeData((prevState: any) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
            />
          </RightSection>
        </UpperSection>
        <BottomSection>
          <BottomLeftSection>
            <MakroSection>
              <MakroItem style={{ backgroundColor: "#846075" }}>kcal</MakroItem>
              <MakroItem style={{ backgroundColor: "#FF9800" }}>
                carbs
              </MakroItem>
              <MakroItem style={{ backgroundColor: "#A5C882" }}>
                protein
              </MakroItem>
              <MakroItem style={{ backgroundColor: "#AF5D63" }}>fat</MakroItem>
            </MakroSection>
            <IngrediensSection>
              <Title>Ingrediens (per serving)</Title>
              {ingrediens.map(({ id, amount, name }: any) => (
                <RecipeDetailsIngredient
                  key={id}
                  id={id}
                  amount={amount}
                  name={name}
                  setIngrediens={setIngrediens}
                />
              ))}
              <Separator />
              <AddIngredient
                onClick={() => {
                  const addIngredients = addIngredient(ingrediens);
                  setIngrediens([...ingrediens, addIngredients]);
                }}
              >
                + Add Ingredient
              </AddIngredient>
              <Separator />
            </IngrediensSection>
          </BottomLeftSection>
          <BottomRightSection>
            {steps.map(({ title, id, description }: any) => (
              <RecipeDetailsStep
                key={id}
                title={title}
                id={id}
                description={description}
                setSteps={setSteps}
              />
            ))}
            <AddStep
              onClick={() => {
                const addSteps = addStep(steps);
                setSteps([...steps, addSteps]);
              }}
            >
              + Add Step
            </AddStep>
          </BottomRightSection>
        </BottomSection>
      </Content>
    </Container>
  );
};

export default RecipeDetails;

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

const IngrediensSection = styled.div`
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
