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
  setSteps: React.Dispatch<React.SetStateAction<stepsStateProps[]>>;
}

export const RecipeDetailsStep = ({
  id,
  title,
  description,
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
      <Content>
        <StepTitle>{title}</StepTitle>
        <StepDescription
          placeholder="Description"
          value={description ? description : ""}
          onChange={(e) => handleInputChange(id, e.target.value)}
        />
        <LowerRightSeparator />
      </Content>
    </Container>
  );
};

const Container = styled.div``;
const Content = styled.div``;

const StepTitle = styled.span`
  margin-left: 0;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
`;

const StepDescription = styled.input`
  width: 100%;
  padding: 5px;
  margin-top: 1rem;
`;

const LowerRightSeparator = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  opacity: 0.6;
  margin-left: 0;
  margin-right: 0;
`;
