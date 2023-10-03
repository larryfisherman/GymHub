import React from "react";
import styled from "styled-components";
import { SideBarItem } from "./SideBarItem";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import {
  BicepsIcon,
  DiaryGrayIcon,
  RecipeGrayIcon,
  ExcerciseGrayIcon,
  SettingsGrayIcon,
  LogoutGrayIcon,
  HomeGrayIcon,
} from "assets/index";

interface Props {
  setTabToggle: React.Dispatch<React.SetStateAction<number>>;
  tab: number;
}

export const NavSideBar = ({ setTabToggle, tab }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Nav>
      <Logo src={BicepsIcon} />
      <Content>
        <NavItems>
          {/* <SideBarItem
            itemImg={HomeGrayIcon}
            itemName="Home"
            onClick={() => setTabToggle(1)}
            isActive={tab === 1}
          /> */}
          <SideBarItem
            itemImg={DiaryGrayIcon}
            itemName="Workout Diary"
            onClick={() => setTabToggle(2)}
            isActive={tab === 2}
          />
          <SideBarItem
            itemImg={RecipeGrayIcon}
            itemName="Recipes"
            onClick={() => setTabToggle(3)}
            isActive={tab === 3}
          />
          <SideBarItem
            itemImg={ExcerciseGrayIcon}
            itemName="Exercises"
            onClick={() => setTabToggle(4)}
            isActive={tab === 4}
          />
          <SideBarItem
            itemImg={RecipeGrayIcon}
            itemName="Ingredients"
            onClick={() => setTabToggle(5)}
            isActive={tab === 5}
          />
        </NavItems>
        <UserSection>
          <SideBarItem itemImg={SettingsGrayIcon} itemName="Settings" />
          <SideBarItem
            itemImg={LogoutGrayIcon}
            itemName="Logout"
            onClick={() => {
              dispatch(logout);
              navigate("/");
              localStorage.removeItem("persist:root");
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
