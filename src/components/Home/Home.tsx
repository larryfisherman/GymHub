import React from "react";
import styled from "styled-components";

import { NavSideBar } from "./NavSideBar/NavSideBar";
import { UserSideBar } from "./UserSideBar/UserSideBar";
import { Main } from "./Main/Main";

export const Home = () => {
  return (
    <>
      <Container>
        <Content>
          <NavSideBar />
          <Main />
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
