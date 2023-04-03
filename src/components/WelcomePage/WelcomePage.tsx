import React from "react";
import styled from "styled-components";
import { HeaderSection } from "./HeaderSection/HeaderSection";
import { MainContent } from "./MainContent.tsx/MainContent";

export const WelcomePage = () => {
  return (
    <Container>
      <Content>
        <HeaderSection />
        <MainContent />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 200vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200vh;
`;
