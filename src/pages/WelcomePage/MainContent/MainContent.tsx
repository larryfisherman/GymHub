import React from "react";
import styled from "styled-components";
import { UpperSection } from "./UpperSection";
import { LowerSection } from "./LowerSection";
import { CommunitySection } from "./CommunitySection";
import { WorkoutSection } from "./WorkoutSection";
import { OpinionsSection } from "./OpinionsSection";

export const MainContent = () => {
  return (
    <Container>
      <Content>
        <UpperSection />
        <WorkoutSection />
        <CommunitySection />
        <OpinionsSection />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
