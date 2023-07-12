import React from "react";
import styled from "styled-components";

export const CommunitySection = () => {
  return (
    <Container>
      <Content>
        <Image src="./assets/welcome-page-community.svg" />
        <Description>
          <Title>Join our community!</Title>
          <Text>
            Be inspired by incredible success stories from fellow fitness
            enthusiasts who have transformed their lives. Discover new workout
            routines, nutrition tips, and wellness strategies shared by
            community members who are dedicated to achieving their goals. With
            our GymHUB, you'll never have to go through your fitness journey
            alone.
          </Text>
        </Description>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 10rem;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45%;
  margin-left: 3rem;
`;

const Title = styled.span`
  display: flex;
  align-self: flex-start;
  font-size: 3rem;
  font-size: bold;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const Text = styled.span`
  width: 60%;
  text-align: left;
  display: flex;
  align-self: flex-start;
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
  margin-right: 3rem;
  margin-left: 10rem;
`;
