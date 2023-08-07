import React from "react";
import styled from "styled-components";

interface Props {
  image: string;
  title: string;
  description: string;
  kcal: number;
  time: number;
  color: string;
}

export const ComplexSetsItem = ({
  image,
  title,
  description,
  kcal,
  time,
  color,
}: Props) => {
  return (
    <Container>
      <Image src={image} loading="lazy" />
      <ContentWrapper style={{ backgroundColor: color }}>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <CaloriesAndTimeSection>
            <Calories>{kcal} kcal</Calories>
            <Time>{time} minutes</Time>
          </CaloriesAndTimeSection>
          <SeeMoreButton>SEE MORE</SeeMoreButton>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  justify-content: space-between;
  margin-left: 5rem;

  min-height: 20rem;
  padding: 1.875rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  min-width: 20rem;
`;

const Image = styled.img`
  position: relative;
  height: 12rem;
  border-radius: 50%;
  border: 1px solid black;
  z-index: 2;
  left: 5rem;

  @media (max-width: 768px) {
    left: 0;
    top: 5rem;
  }
`;

const Title = styled.title`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 100%;

    span {
      width: 100%;
      display: inline-block;
      white-space: nowrap;
    }
  }
`;

const Description = styled.span`
  display: flex;
  overflow-wrap: break-word;
  overflow-y: scroll;
  font-size: 0.8rem;
  margin-bottom: 1rem;

  ::-webkit-scrollbar {
    height: 10px;
  }

  @media (max-width: 768px) {
    width: 80%;
    padding-left: 0;
  }
`;

const CaloriesAndTimeSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Calories = styled.div``;
const Time = styled.div``;

const SeeMoreButton = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 10rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 5%;
  border: none;
  background-color: rgb(21, 34, 56);
  color: white;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
