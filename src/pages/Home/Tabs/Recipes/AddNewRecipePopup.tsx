import React, { useState } from "react";
import styled from "styled-components";

export const AddNewRecipePopup = () => {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999;
`;

const Content = styled.div`
  background-color: black;
  width: 80%;
  height: 80%;
`;
