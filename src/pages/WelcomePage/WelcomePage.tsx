import React, { useState } from "react";
import styled from "styled-components";
import { HeaderSection } from "./HeaderSection/HeaderSection";
import { MainContent } from "./MainContent/MainContent";
import { LoginUser } from "./LoginUser/LoginUser";
import { RegisterUser } from "./RegisterUser/RegisterUser";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

export const WelcomePage = () => {
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <Container>
      <Content>
        {showRegisterPopup && (
          <RegisterUser
            setShowRegisterPopup={setShowRegisterPopup}
            setShowLoginPopup={setShowLoginPopup}
          />
        )}
        {showLoginPopup && <LoginUser setShowLoginPopup={setShowLoginPopup} />}
        <HeaderSection setShowRegisterPopup={setShowRegisterPopup} />
        <MainContent />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
