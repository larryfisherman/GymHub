import React from "react";
import styled from "styled-components";
import { SideBarItem } from "./SideBarItem";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  setTabToggle?: any;
}

export const NavSideBar = ({ setTabToggle }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Nav>
      <Logo src="./assets/biceps-icon.svg" />
      <Content>
        <NavItems>
          <SideBarItem
            itemImg="./assets/home-gray-icon.svg"
            itemName="Home"
            onClick={() => setTabToggle(1)}
          />
          <SideBarItem
            itemImg="./assets/diary-gray-icon.svg"
            itemName="Workout Diary"
            onClick={() => setTabToggle(2)}
          />
          <SideBarItem
            itemImg="./assets/recipe-gray-icon.svg"
            itemName="Recipes"
            onClick={() => setTabToggle(3)}
          />
          <SideBarItem
            itemImg="./assets/excercise-gray-icon.svg"
            itemName="Exercises"
            onClick={() => setTabToggle(4)}
          />
          {/* <SideBarItem
            itemImg="./assets/progress-gray-icon.svg"
            itemName="Progress"
            onClick={() => setTabToggle(5)}
          /> */}
        </NavItems>
        <UserSection>
          <SideBarItem
            itemImg="./assets/settings-gray-icon.svg"
            itemName="Settings"
          />
          <SideBarItem
            itemImg="./assets/logout-gray-icon.svg"
            itemName="Logout"
            onClick={() => {
              dispatch(logout);
              navigate("/");
              localStorage.removeItem("token");
            }}
          />
        </UserSection>
      </Content>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 13%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
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

  @media (max-width: 768px) {
    width: 5.5rem;
  }
`;
