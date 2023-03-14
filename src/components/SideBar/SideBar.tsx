import React from "react";
import styled from "styled-components";
import { SideBarItem } from "./SideBarItem";

export const SideBar = () => {
  return (
    <Nav>
      <Logo src="./svgs/logo.svg" />
      <SideBarItem itemImg="./svgs/home-gray-icon.svg" itemName="Home" />
      <SideBarItem
        itemImg="./svgs/diary-gray-icon.svg"
        itemName="Workout Diary"
      />
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
`;

const Logo = styled.img`
  padding: 40px;
`;
