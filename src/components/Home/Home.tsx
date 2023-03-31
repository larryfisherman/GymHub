import React, { useState } from "react";
import styled from "styled-components";
import { MainContent } from "../MainContent/MainContent";
import { NavSideBar } from "../NavSideBar/NavSideBar";
import { UserSideBar } from "../UserSideBar/UserSideBar";
import { RegisterUser } from "../RegisterUser/RegisterUser";
import { LoginUser } from "../LoginUser/LoginUser";

export const Home = () => {
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <>
      <Container>
        <Content>
          <NavSideBar setShowRegisterPopup={setShowRegisterPopup} />
          <MainContent />
          <UserSideBar />
          {showRegisterPopup && (
            <RegisterUser
              setShowRegisterPopup={setShowRegisterPopup}
              setShowLoginPopup={setShowLoginPopup}
            />
          )}
          {showLoginPopup && (
            <LoginUser setShowLoginPopup={setShowLoginPopup} />
          )}
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
