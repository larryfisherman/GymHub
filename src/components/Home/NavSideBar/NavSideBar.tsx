import React from "react";
import styled from "styled-components";
import { SideBarItem } from "./SideBarItem";

interface Props {
  setRecipiesVisible: any;
  setWorkoutDiaryVisible: any;
  setProgressVisible: any;
  setExercisesVisible: any;
}

export const NavSideBar = ({
  setRecipiesVisible,
  setWorkoutDiaryVisible,
  setExercisesVisible,
  setProgressVisible,
}: Props) => {
  return (
    <Nav>
      <Logo src="./svgs/logo.svg" />
      <Content>
        <NavItems>
          <SideBarItem itemImg="./svgs/home-gray-icon.svg" itemName="Home" />
          <SideBarItem
            itemImg="./svgs/diary-gray-icon.svg"
            itemName="Workout Diary"
            onClick={() => setWorkoutDiaryVisible(true)}
          />
          <SideBarItem
            itemImg="./svgs/recipe-gray-icon.svg"
            itemName="Recipes"
            onClick={() => setRecipiesVisible(true)}
          />
          <SideBarItem
            itemImg="./svgs/excercise-gray-icon.svg"
            itemName="Exercises"
            onClick={() => setExercisesVisible(true)}
          />
          <SideBarItem
            itemImg="./svgs/progress-gray-icon.svg"
            itemName="Progress"
            onClick={() => setProgressVisible(true)}
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  height: 20%;
  padding: 25px;

  &:hover {
    cursor: pointer;
  }
`;
