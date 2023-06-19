import React from "react";
import styled from "styled-components";

interface Props {
  itemImg: string;
  itemName: string;
  onClick?: any;
}

export const SideBarItem = ({ itemImg, itemName, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Content>
        <Img src={itemImg} />
        <span>{itemName}</span>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // border-left: 5px solid transparent;
  text-decoration: none;
  color: black;

  &:hover {
    border-left: 5px solid orange;
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

const Img = styled.img`
  padding: 5px;
`;
