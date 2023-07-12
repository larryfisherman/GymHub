import React from "react";
import styled from "styled-components";

export const WorkoutSection = () => {
  return (
    <Container>
      <Content>
        <Description>
          <Title>
            The{" "}
            <UnderlineMarker>
              <SecondUnderlineMarker>choice</SecondUnderlineMarker>
            </UnderlineMarker>{" "}
            is yours
          </Title>
          <Text>
            <Item>
              <CheckedIcon src="./assets/check-icon.svg" />
              <ItemText>
                A fitness tool with the greatest customization possibilities
              </ItemText>
            </Item>
            <Item>
              <CheckedIcon src="./assets/check-icon.svg" />
              <ItemText>You decide how you train and how you eat</ItemText>
            </Item>
            <Item>
              <CheckedIcon src="./assets/check-icon.svg" />
              <ItemText>With our support, you can achieve anything</ItemText>
            </Item>
          </Text>
        </Description>
        <Images>
          <WorkoutImage src="./assets/workout-section-screen.svg" />
          <WorkoutImageBackground src="./assets/workout-section-screen-background.svg" />
        </Images>
      </Content>
    </Container>
  );
};

const UnderlineMarker = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: -10px;
    bottom: 11px;
    width: 11rem;
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
    left: 2rem;
    bottom: 4px;
    width: 9rem;
    height: 8px;
    background-color: #ff9800;
    border-radius: 50px;
    transform: scaleX(0.8) rotate(-3rem) skewX(-1deg);
  }
`;

const Images = styled.div`
  position: relative;
  width: 60%;
`;
const WorkoutImage = styled.img`
  width: 100%;
  position: absolute;
`;
const WorkoutImageBackground = styled.img`
  position: relative;
  z-index: -5;
  right: 40rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10rem;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10rem;
  width: 40%;
`;
const Title = styled.span`
  font-size: 3rem;
  font-size: bold;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const Text = styled.span`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
`;
const CheckedIcon = styled.img``;
const ItemText = styled.span``;
