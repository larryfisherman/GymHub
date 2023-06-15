import React from "react";
import styled from "styled-components";
import { Workout } from "./Workout";

export const WorkoutDiary = () => {
  const workouts = [
    {
      id: 1,
      title: "Legs & Deltoids",
      favourite: true,
    },
    {
      id: 2,
      title: "Chest",
      favourite: false,
    },
    {
      id: 3,
      title: "test",
      favourite: false,
    },
  ];

  return (
    <Container>
      <Content>
        <Title>MY WORKOUTS</Title>
        <Workouts>
          {workouts.map(({ title, favourite }: any) => (
            <Workout title={title} favourite={favourite} />
          ))}
        </Workouts>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const Title = styled.div``;
const Workouts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
