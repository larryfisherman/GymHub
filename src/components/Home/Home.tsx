import React, { useState } from "react";
import styled from "styled-components";
import { MainContent } from "../MainContent/MainContent";
import { NavSideBar } from "../NavSideBar/NavSideBar";
import { UserSideBar } from "../UserSideBar/UserSideBar";
import { LoginUser } from "../LoginUser/LoginUser";
import { RegisterUser } from "../RegisterUser/RegisterUser";

export const Home = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <>
      <Container>
        <Content>
          <NavSideBar setShowLoginPopup={setShowLoginPopup} />
          <MainContent />
          <UserSideBar />
          {showLoginPopup && <RegisterUser />}
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
