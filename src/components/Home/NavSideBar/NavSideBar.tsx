import React from "react";
import styled from "styled-components";
import { SideBarItem } from "./SideBarItem";

interface Props {
  setTabToggle: any;
}

export const NavSideBar = ({ setTabToggle }: Props) => {
  return (
    <Nav>
      <Logo src="./svgs/biceps-icon.svg" />
      <Content>
        <NavItems>
          <SideBarItem
            itemImg="./svgs/home-gray-icon.svg"
            itemName="Home"
            onClick={() => setTabToggle(1)}
          />
          <SideBarItem
            itemImg="./svgs/diary-gray-icon.svg"
            itemName="Workout Diary"
            onClick={() => setTabToggle(2)}
          />
          <SideBarItem
            itemImg="./svgs/recipe-gray-icon.svg"
            itemName="Recipes"
            onClick={() => setTabToggle(3)}
          />
          <SideBarItem
            itemImg="./svgs/excercise-gray-icon.svg"
            itemName="Exercises"
            onClick={() => setTabToggle(4)}
          />
          <SideBarItem
            itemImg="./svgs/progress-gray-icon.svg"
            itemName="Progress"
            onClick={() => setTabToggle(5)}
          />
        </NavItems>
        <UserSection>
          <SideBarItem
            itemImg="./svgs/settings-gray-icon.svg"
            itemName="Settings"
          />
          <SideBarItem
            itemImg="./svgs/logout-gray-icon.svg"
            itemName="Logout"
          />
        </UserSection>
      </Content>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  padding: 20px 0px 20px 0px;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
`;

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
`;

const Logo = styled.img`
  width: 7rem;
  padding: 25px;

  &:hover {
    cursor: pointer;
  }

  @media(max-width: 768px) {
    background-image
  }
`;
