import React from "react";
import styled from "styled-components";

interface Props {
  message?: string;
  onConfirm?: any;
  onCancel?: any;
}

export const ConfirmationModal = ({ message, onConfirm, onCancel }: Props) => {
  return (
    <Container>
      <Content>
        <Text>{message}</Text>
        <Buttons>
          <Confirm onClick={onConfirm}>Yes</Confirm>
          <Cancel onClick={onCancel}>No</Cancel>
        </Buttons>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  bored-radius: 5%;
  background-color: rgba(255, 255, 255, 0.9);
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
`;

const Text = styled.span`
  color: black;
`;
const Buttons = styled.div`
  display: flex;
  width: 20%;
  margin-top: 2rem;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 3rem;
  height: 2rem;
  border: none;
  background-color: #ff9800;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const Confirm = styled(Button)``;
const Cancel = styled(Button)``;
