import React from "react";
import styled from "styled-components";
import { SideBarItem } from "./SideBarItem";
import { Link } from "react-router-dom";

export const NavSideBar = () => {
  return (
    <Nav>
      <Logo src="./svgs/logo.svg" />
      <Content>
        <NavItems>
          <SideBarItem itemImg="./svgs/home-gray-icon.svg" itemName="Home" />
          <SideBarItem
            itemImg="./svgs/diary-gray-icon.svg"
            itemName="Workout Diary"
          />
          <SideBarItem
            itemImg="./svgs/recipe-gray-icon.svg"
            itemName="Recipes"
          />
          <SideBarItem
            itemImg="./svgs/excercise-gray-icon.svg"
            itemName="Exercises"
          />
          <SideBarItem
            itemImg="./svgs/progress-gray-icon.svg"
            itemName="Progress"
          />
        </NavItems>
        <UserSection>
          <SideBarItem
            itemImg="./svgs/settings-gray-icon.svg"
            itemName="Settings"
          />
          <Link to="/register">
            <SideBarItem
              itemImg="./svgs/logout-gray-icon.svg"
              itemName="Logout"
            />
          </Link>
        </UserSection>
      </Content>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 20%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
`;

const UserSection = styled.div`
  height: 10%;
`;

const Logo = styled.img`
  height: 20%;
  padding: 25px;

  &:hover {
    cursor: pointer;
  }
`;
