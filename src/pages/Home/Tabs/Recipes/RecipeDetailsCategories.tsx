import React from "react";
import styled from "styled-components";

interface Props {
  id: number;
  title: string;
  setCategories: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
        active: boolean;
      }[]
    >
  >;
  categories: any;
  active: any;
}

export const RecipeDetailsCategories = ({
  id,
  title,
  setCategories,
  categories,
  active,
}: Props) => {
  const handleActiveChange = (id: number) => {
    const updatedState = categories.map((el: any) => ({
      ...el,
      active: false,
    }));

    setCategories(updatedState);

    setCategories((prevData: any) => {
      return prevData.map((item: any) =>
        item.id === id ? { ...item, active: true } : item
      );
    });
  };

  return (
    <Container
      style={{ backgroundColor: `${active ? "orange" : "white"}` }}
      onClick={() => handleActiveChange(id)}
    >
      {title}
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
