import React from "react";
import styled from "styled-components";
import { ProgressScreen, WelcomePageTitleSection } from "assets/index";

export const UpperSection = () => {
  return (
    <Container>
      <Content>
        <TitleSection>
          <Title>
            All in one{" "}
            <UnderlineMarker>
              <SecondUnderlineMarker>tool</SecondUnderlineMarker>
            </UnderlineMarker>{" "}
            that you need
          </Title>
          <Description>
            Welcome to GymHUB - the ultimate fitness dashboard to help you
            achieve your health and fitness goals! Our project was born out of a
            passion for fitness and a desire to make it accessible to everyone.
          </Description>
          <BackgroundImage src={ProgressScreen} />
        </TitleSection>
      </Content>
    </Container>
  );
};

const TitleSection = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: url(${WelcomePageTitleSection}) center center / cover;
  padding: 10rem;
`;

const UnderlineMarker = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: -10px;
    bottom: 10px;
    width: 7rem;
    height: 8px;
    background-color: #ff9800;
    border-radius: 50px;
    transform: scaleX(0.8) skewX(-50deg);
  }
`;

const SecondUnderlineMarker = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 5rem;
    height: 8px;
    background-color: #ff9800;
    border-radius: 50px;
    transform: scaleX(0.8) rotate(-10deg) skewX(-1deg);
  }
`;

const Title = styled.span`
  font-size: 3rem;
  font-size: bold;
  margin-bottom: 3rem;
`;
const Description = styled.span`
  width: 45%;
  margin-bottom: 3rem;
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
  width: 65%;
`;
