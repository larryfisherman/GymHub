import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  image: string;
}

export const CategoriesItem = ({ title, image }: Props) => {
  return (
    <Container>
      <Image src={`./assets/${image}.svg`} />
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
