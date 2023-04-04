import React from "react";
import styled from "styled-components";
import { UpperSection } from "./UpperSection";
import { LowerSection } from "./LowerSection";

export const MainContent = () => {
  return (
    <Container>
      <Content>
        <UpperSection />
        <LowerSection />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`;
const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
