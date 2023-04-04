import React from "react";
import styled from "styled-components";
import { UpperSection } from "./UpperSection";

export const MainContent = () => {
  return (
    <Container>
      <Content>
        <UpperSection />
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
`;
