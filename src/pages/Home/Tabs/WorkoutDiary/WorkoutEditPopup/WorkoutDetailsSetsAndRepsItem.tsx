import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  id: number;
  title: string;
  sets: number;
  repeats: number;
  setSetsAndReps: any;
}

export const WorkoutDetailsSetsAndRepsItem = ({
  id,
  title,
  sets,
  repeats,
  setSetsAndReps,
}: Props) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (id: number, property: string, value: string) => {
    console.log(id, property, value);
    setSetsAndReps((prevData: any) =>
      prevData.map((item: any) =>
        item.exerciseId === id ? { ...item, [property]: value } : item
      )
    );
  };

  return (
    <Container>
      {isEdit ? (
        <Content>
          <ValuesSection>
            <SetsInput
              defaultValue={sets}
              onChange={(e) => handleInputChange(id, "sets", e.target.value)}
            />{" "}
            x{" "}
            <RepeatsInput
              defaultValue={repeats}
              onChange={(e) => handleInputChange(id, "repeats", e.target.value)}
            />
          </ValuesSection>
          <Title>{title}</Title>
          <PencilIcon
            src="./assets/pencil-icon.svg"
            onClick={() => setIsEdit(!isEdit)}
          />
        </Content>
      ) : (
        <Content>
          {sets}x{repeats} {title}
          <PencilIcon
            src="./assets/pencil-icon.svg"
            onClick={() => setIsEdit(!isEdit)}
          />
        </Content>
      )}

      <Separator />
    </Container>
  );
};

const Title = styled.span`
  display: flex;
  flex-grow: 1;
`;

const ValuesSection = styled.div`
  height: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

const SetsInput = styled.input`
  width: 2rem;
  text-align: center;
`;
const RepeatsInput = styled.input`
  width: 2rem;
  text-align: center;
`;

const PencilIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 3rem;
  margin-top: 1rem;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Separator = styled.hr`
  width: 100%;
`;
