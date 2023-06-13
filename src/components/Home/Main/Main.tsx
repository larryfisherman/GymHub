import React from "react";
import styled from "styled-components";

import { Recipies } from "./Recipies/Recipies";

import { WorkoutDiary } from "../../WorkoutDiary/WorkoutDiary";

interface Props {
  recipiesVisible: boolean;
  workoutDiaryVisible: boolean;
  exercisesVisible: boolean;
  progressVisible: boolean;
}

export const Main = ({ recipiesVisible }: Props) => {
  return (
    <Container>
      <Content>{recipiesVisible && <Recipies />}</Content>
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  background-color: grey;
`;
const Content = styled.div``;
