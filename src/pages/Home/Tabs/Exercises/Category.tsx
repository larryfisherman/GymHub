import React from "react";
import styled from "styled-components";

export const Category = (title: string) => {
  return <Content>{title.toUpperCase()}</Content>;
};

const Content = styled.button`
  width: 8rem;
  border: 2.5px solid #ff9800;
  margin-right: 1rem;
  background-color: white;
  border-radius: 10%;
  padding: 0.3rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
  }
`;
