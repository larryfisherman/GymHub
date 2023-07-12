import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <LeftSide>
          <Logo src="./assets/logo.svg" />
          <Text>
            GymHUB is mre than just a fitness dashboard, it's a community of
            fittness enthusiasts and professionals. Join us in our mission to
            promote health and wellness and inspire others to lead active
            lifystyles.
          </Text>
          <SocialMedia>
            <Link src="./assets/fb-icon.svg" />
            <Link src="./assets/yt-icon.svg" />
            <Link src="./assets/twitter-icon.svg" />
            <Link src="./assets/ig-icon.svg" />
          </SocialMedia>
        </LeftSide>
        <RightSide></RightSide>
      </Content>
    </Container>
  );
};

const Link = styled.img``;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-betwen;
`;
const Text = styled.span`
  color: white;
  width: 20%;
  text-align: left;
`;

const Logo = styled.img``;

const LeftSide = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const RightSide = styled.div``;

const Container = styled.div`
  width: 100%;
  min-height: 25rem;
  background-color: #263238;
`;

const Content = styled.div`
  width: 100%;
  height: 25rem;
  padding: 2rem;
`;
