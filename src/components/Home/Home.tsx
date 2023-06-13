import React, { useState } from "react";
import styled from "styled-components";

import { NavSideBar } from "./NavSideBar/NavSideBar";
import { UserSideBar } from "./UserSideBar/UserSideBar";
import { Main } from "./Main/Main";

export const Home = () => {
  const [workoutDiaryVisible, setWorkoutDiaryVisible] = useState(false);
  const [recipiesVisible, setRecipiesVisible] = useState(false);
  const [exercisesVisible, setExercisesVisible] = useState(false);
  const [progressVisible, setProgressVisible] = useState(false);

  return (
    <>
      <Container>
        <Content>
          <NavSideBar
            setRecipiesVisible={setRecipiesVisible}
            setWorkoutDiaryVisible={setWorkoutDiaryVisible}
            setExercisesVisible={setExercisesVisible}
            setProgressVisible={setProgressVisible}
          />
          <Main
            recipiesVisible={recipiesVisible}
            workoutDiaryVisible={workoutDiaryVisible}
            exercisesVisible={exercisesVisible}
            progressVisible={progressVisible}
          />
          <UserSideBar />
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
