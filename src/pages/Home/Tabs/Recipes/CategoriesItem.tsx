import React from "react";
import styled from "styled-components";

interface Props {
  id: number;
  title: string;
  image: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
}

export const CategoriesItem = ({
  id,
  title,
  image,
  setSelectedCategory,
  isActive,
}: Props) => {
  return (
    <Container onClick={() => setSelectedCategory(id)}>
      <Image src={image} />
      <Content style={isActive ? { backgroundColor: "#FF9800" } : {}}>
        {title}
      </Content>
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
  &:hover {
    cursor: pointer;
  }
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

const Image = styled.img`
  position: relative;
  top: 3rem;
  width: 10rem;
  border-radius: 50%;
  border: 1px solid black;
  @media (max-width: 768px) {
    left: 0;
  }
`;
