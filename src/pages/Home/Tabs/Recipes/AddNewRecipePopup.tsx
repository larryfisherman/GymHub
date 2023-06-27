import React from "react";
import styled from "styled-components";

export const AddNewRecipePopup = () => {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Content = styled.div`
  background-color: white;
  width: 50%;
  height: 100%;
`;
