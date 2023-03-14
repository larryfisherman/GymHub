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
        <img src={itemImg} />
        {itemName}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: 30px;
`;
