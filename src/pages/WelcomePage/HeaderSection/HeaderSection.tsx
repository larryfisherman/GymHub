import React from "react";
import styled, { keyframes } from "styled-components";
import { LogoImg, WelcomePagePNG, ArrowIcon } from "assets/index";

interface Props {
  setShowRegisterPopup: any;
}

export const HeaderSection = ({ setShowRegisterPopup }: Props) => {
  return (
    <Container>
      <Content>
        <Logo src={LogoImg} />
        <MainContent>
          <h3>TRANSFORM YOUR BODY</h3>
          <h1>DOMINATE YOUR GOALS</h1>
          <p>
            Start now with <span>GymHub</span>
          </p>
          <LoginButton onClick={() => setShowRegisterPopup(true)}>
            JOIN US
          </LoginButton>
        </MainContent>
        <ScrollDownIcon src={ArrowIcon} />
      </Content>
    </Container>
  );
};

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  color: white;
  font-size: 32px;

  & > p {
    font-size: 32px;
    font-weight: 600;
    & > span {
      color: orange;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;

    & > p {
      font-size: 1.3rem;
      font-weight: 600;
      & > span {
        color: orange;
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: url(${WelcomePagePNG}) center center / cover;
`;

const LoginButton = styled.button`
  margin-top: 20px;
  letter-spacing: 3px;
  padding: 15px;
  width: 10rem;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: orange;
  color: rgba(255, 255, 255);
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;
const Logo = styled.img`
  width: 15%;
  padding: 20px 30px;

  @media (max-width: 860px) {
    display: none;
  }
`;

const ScrollDownIconAnimation = keyframes`
  from {
    top: 0px;
  }

  to {
    top: 3px;
  }
`;

const ScrollDownIcon = styled.img`
  height: 4rem;
  margin-top: 3rem;
  animation: ${ScrollDownIconAnimation} 0.5s linear infinite;

  @media (max-width: 768px) {
    font-size: 2px;
  }
`;
