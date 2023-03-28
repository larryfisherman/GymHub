import React, { useState } from "react";
import styled from "styled-components";
import { MainContent } from "../MainContent/MainContent";
import { NavSideBar } from "../NavSideBar/NavSideBar";
import { RegisterUser } from "../RegisterUser/RegisterUser";
import { UserSideBar } from "../UserSideBar/UserSideBar";

export const Home = () => {
  const [showRegisterUserPopup, setShowRegisterUserPopup] = useState(false);

  return (
    <Container>
      <Content>
        <NavSideBar setShowRegisterUserPopup={setShowRegisterUserPopup} />
        <MainContent />
        <UserSideBar />
        {showRegisterUserPopup && <RegisterUser />}
      </Content>
    </Container>
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
