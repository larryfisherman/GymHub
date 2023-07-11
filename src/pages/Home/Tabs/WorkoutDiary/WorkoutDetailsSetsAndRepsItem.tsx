import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  id: number;
  title: string;
  sets: number;
  repeats: number;
}

export const WorkoutDetailsSetsAndRepsItem = ({
  id,
  title,
  sets,
  repeats,
}: Props) => {
  const [edit, setEdit] = useState(false);
  return (
    <Container>
      <Content>
        {sets}x{repeats} {title}
        <PencilIcon src="./assets/pencil-icon.svg" />
      </Content>
      <Separator />
    </Container>
  );
};

const PencilIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Separator = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;
