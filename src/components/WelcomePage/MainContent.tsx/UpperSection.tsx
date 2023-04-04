import React from "react";
import styled from "styled-components";
import { UpperSectionItem } from "./UpperSectionItem";

export const UpperSection = () => {
  return (
    <Container>
      <Content>
        <UpperSectionItem
          icon="workout-diary-landing-icon"
          text="Log your workouts and master your exercise regimen with our workout diary. Choose from diverse exercises and craft tailored workout plans that harmonize with your schedule and fitness capacity."
          title="Workout diary"
        />
        <UpperSectionItem
          icon="recipies-landing-icon"
          text="Discover delectable recipes that comply with your dietary requisities and fitness aspirations. Our recipe repository has everything you need to refuel your body and persist on the path to success."
          title="Recipies"
        />
        <UpperSectionItem
          icon="progress-landing-icon"
          text="Measure your advancement and witness your triumphs with our user-friendly progress tracker. Estabilish targets and milestones, and revel in your accomplishments every step of the way."
          title="Progress"
        />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 30%;
`;
const Content = styled.div`
  display: flex;
  height: 100%;
`;
