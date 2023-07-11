import React from "react";
import styled from "styled-components";

export const UpperSection = () => {
  return (
    <Container>
      <Content>
        <TitleSection>
          <Title>All in one tool that you need</Title>
          <Description>
            Welcome to GymHUB - the ultimate fitness dashboard to help you
            achieve your health and fitness goals! Our project was born out of a
            passion for fitness and a desire to make it accessible to everyone.
          </Description>
          <BackgroundImage src="./assets/progress-screen.svg" />
        </TitleSection>
      </Content>
    </Container>
  );
};

const TitleSection = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: url("./assets/welcome-page-title-section.svg") center center /
    cover;
`;
const Title = styled.span`
  font-size: 3rem;
  font-size: bold;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const Description = styled.span`
  width: 45%;
  margin-bottom: 3rem;
`;

const Images = styled.div`
  width: 100%;
  height: 20%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  height: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BackgroundImage = styled.img`
  width: 50%;
  height: 80%;
`;
