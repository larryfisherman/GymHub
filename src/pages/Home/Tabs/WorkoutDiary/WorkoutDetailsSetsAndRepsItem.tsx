import React from "react";
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
  return (
    <Content>
      {sets}x{repeats} {title}
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
`;
