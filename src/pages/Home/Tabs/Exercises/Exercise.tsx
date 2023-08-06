import React from "react";
import styled from "styled-components";

interface Props {
  id: number;
  title: string;
}

export const Exercise = ({ title }: Props) => {
  return (
    <Container>
      <Content>
        <ExerciseTitle>{title}</ExerciseTitle>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 49%;
  background-color: white;
  margin-bottom: 2rem;
  height: 10rem;
  border-radius: 3%;
`;
const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const Button = styled.button`
  display: flex;
  width: 7rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  background-color: #ff9800;
  font-size: 1rem;
  color: white;
  letter-spacing: 1px;
  font-weight: 700;
  border: 1px solid transparent;
  border-radius: 5%;

  &:hover {
    cursor: pointer;
  }
`;

const ExerciseTitle = styled.h3`
  display: flex;
  font-size: 1.5rem;
`;
