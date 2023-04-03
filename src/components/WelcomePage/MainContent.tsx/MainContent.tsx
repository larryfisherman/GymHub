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

const Container = styled.div``;
const Content = styled.div`
  display: flex;
`;
