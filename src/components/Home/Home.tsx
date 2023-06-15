import React, { useState } from "react";
import styled from "styled-components";

import { NavSideBar } from "./NavSideBar/NavSideBar";
import { UserSideBar } from "./UserSideBar/UserSideBar";
import { Main } from "./Main/Main";
import { WorkoutDiary } from "../WorkoutDiary/WorkoutDiary";

export const Home = () => {
  const [tabToggle, setTabToggle] = useState(1);

  return (
    <>
      <Container>
        <Content>
          <NavSideBar setTabToggle={setTabToggle} />
          <Main tabToggle={tabToggle} />
          {/* <UserSideBar /> */}
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
