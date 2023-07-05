import React from "react";
import styled from "styled-components";

interface Props {
  id?: number;
  title: string;
  description: string;
}

export const RecipeDetailsStep = ({ id, title, description }: any) => {
  return (
    <Container>
      <Content>
        <StepTitle>{title}</StepTitle>
        <StepDescription
          placeholder="Description"
          defaultValue={description ? description : ""}
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
