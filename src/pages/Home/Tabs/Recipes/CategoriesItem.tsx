import React from "react";
import styled from "styled-components";

interface Props {
  id: number;
  title: string;
  image: string;
  setSelectedCategory: any;
}

export const CategoriesItem = ({
  id,
  title,
  image,
  setSelectedCategory,
}: Props) => {
  return (
    <Container onClick={() => setSelectedCategory(id)}>
      <Content>{title}</Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

const Content = styled.div`
  min-height: 8rem;
  min-width: 11rem;
  background-color: rgb(21, 34, 56);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  border-radius: 5%;
  padding-bottom: 1rem;
`;
