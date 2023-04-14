import React from "react";
import styled from "styled-components";

import { WorkoutDiary } from "../../WorkoutDiary/WorkoutDiary";

export const Main = () => {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  background-color: grey;
`;
const Content = styled.div``;
