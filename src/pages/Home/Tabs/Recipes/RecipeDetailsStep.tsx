import React from "react";
import styled from "styled-components";

interface stepsStateProps {
  id: number;
  title: string;
  description: string;
}

interface Props {
  id: number;
  title: string;
  description: string;
  steps: any;
  setSteps: React.Dispatch<React.SetStateAction<stepsStateProps[]>>;
}

export const RecipeDetailsStep = ({
  id,
  title,
  description,
  steps,
  setSteps,
}: Props) => {
  const handleInputChange = (id: number, value: string) => {
    setSteps((prevData: any) =>
      prevData.map((item: any) =>
        item.id === id ? { ...item, description: value } : item
      )
    );
  };

  return (
    <Container>
      <StepTitle>{title}</StepTitle>
      <Content>
        <StepDescription
          placeholder="Description"
          value={description ? description : ""}
          onChange={(e) => handleInputChange(id, e.target.value)}
        />
      </Content>

      <LowerRightSeparator />
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const TrashIcon = styled.img`
  cursor: pointer;
`;

const StepTitle = styled.span`
  margin-left: 0;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
`;

const StepDescription = styled.input`
  width: 95%;
  padding: 5px;
`;

const LowerRightSeparator = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  opacity: 0.6;
  margin-left: 0;
  margin-right: 0;
`;
