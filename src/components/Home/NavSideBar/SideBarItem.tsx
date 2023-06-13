import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  itemImg: string;
  itemName: string;
}

export const SideBarItem = ({ itemImg, itemName }: Props) => {
  return (
    <StyledLink to="/">
      <Content>
        <Img src={itemImg} />
        {itemName}
      </Content>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 5px solid transparent;
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
`;

const Img = styled.img`
  padding: 5px;
`;
