import React from "react";
import styled from "styled-components";

interface Props {
  id: number;
  name: string;
  active: any;
  setActiveCategory: any;
}

export const RecipeDetailsCategories = ({
  id,
  name,
  setActiveCategory,
  active,
}: Props) => {
  return (
    <Container
      style={{ backgroundColor: `${active ? "orange" : "white"}` }}
      onClick={() => setActiveCategory(id)}
    >
      {name}
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  padding: 0.5rem;
  border-radius: 5%;
  border: 1px solid black;
  letter-spacing: 0.5px;
  font-weight: 200;
  margin-bottom: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
