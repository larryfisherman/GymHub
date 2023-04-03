import React from "react";
import styled from "styled-components";

export const HeaderSection = () => {
  return (
    <Container>
      <Content>
        <Logo src="./svgs/logo.svg" />
        <MainContent>
          <h3>TRANSFORM YOUR BODY</h3>
          <h1>DOMINATE YOUR GOALS</h1>
          <p>
            Start now with <span>GymHub</span>
          </p>
          <LoginButton>JOIN US</LoginButton>
        </MainContent>
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
  font-size: 46px;
  color: white;

  & > p {
    font-size: 32px;
    font-weight: 600;
    & > span {
      color: orange;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 50%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  background: url("./svgs/welcome-page.png") center center / cover;
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
`;