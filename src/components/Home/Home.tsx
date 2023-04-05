import React from "react";
import styled from "styled-components";
// import { MainContent } from "../MainContent/MainContent";
import { NavSideBar } from "../NavSideBar/NavSideBar";
import { UserSideBar } from "../UserSideBar/UserSideBar";

export const Home = () => {
  return (
    <>
      <Container>
        <Content>
          <NavSideBar />
          {/* <MainContent /> */}
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
