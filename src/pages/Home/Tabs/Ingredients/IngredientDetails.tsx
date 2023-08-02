import React from "react";
import styled from "styled-components";
import { useIngredientData } from "./hooks/useIngredientData";

interface Props {
  id: number;
}

export const IngredientDetails = ({ id }: Props) => {
  const { ingredientData } = useIngredientData(id);

  return (
    <Container>
      <Content>
        <RecipeActions>
          <Button>SAVE</Button>
          <ExitIcon src="./assets/cross-icon.svg" />
        </RecipeActions>
        <UpperSection>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <RightSection>
            <IngredientName
              placeholder="The name of the ingredient"
              value={ingredientData.name ? ingredientData.name : ""}
            />
          </RightSection>
        </UpperSection>
        <BottomSection>
          <BottomLeftSection></BottomLeftSection>
          <BottomRightSection>
            <TimeAndKcalSection>
              <TimeAndKcalItem>
                <ClockIcon src="./assets/clock-icon.svg" />
                <TimeAndKcalItemText></TimeAndKcalItemText>
              </TimeAndKcalItem>
              <TimeAndKcalItem>
                <ClockIcon src="./assets/fire-kcal-icon.svg" />
                <TimeAndKcalItemText></TimeAndKcalItemText>
              </TimeAndKcalItem>
            </TimeAndKcalSection>
          </BottomRightSection>
        </BottomSection>
      </Content>
    </Container>
  );
};

const ClockIcon = styled.img`
  width: 2rem;
`;

const TimeAndKcalItemText = styled.span``;

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

const BottomLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const BottomRightSection = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

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

const IngredientName = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 1rem;
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
