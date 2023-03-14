import React from "react";
import styled from "styled-components";
import { SideBar } from "../SideBar/SideBar";

export const Home = () => {
  return (
    <Container>
      <Content>
        <SideBar />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vh;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
