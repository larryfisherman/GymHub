import React from "react";
import styled from "styled-components";
import { SideBarItem } from "./SideBarItem";

export const SideBar = () => {
  return (
    <Nav>
      <Logo src="./svgs/logo.svg" />
      <SideBarItem />
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  height: 100%;
  width: 30%;
`;

const Logo = styled.img`
  padding: 40px;
`;
