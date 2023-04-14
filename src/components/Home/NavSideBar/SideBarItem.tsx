import React from "react";
import styled from "styled-components";

interface Props {
  itemImg: string;
  itemName: string;
}

export const SideBarItem = ({ itemImg, itemName }: Props) => {
  return (
    <Container>
      <Content>
        <Img src={itemImg} />
        {itemName}
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
  border-left: 5px solid transparent;
  &:hover {
    border-left: 5px solid orange;
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  padding: 5px;
`;
