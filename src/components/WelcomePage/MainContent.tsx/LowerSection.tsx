import React from "react";
import styled from "styled-components";

export const LowerSection = () => {
  return (
    <Content>
      <Item>
        <Image src="./svgs/welcome-page-1.jpg" loading="lazy" />
        <Text>
          <Title>About Project</Title>
          <p>
            Welcome to GymHub - the ultimate fitness dashboard to help you
            achive your health and fitness goals! Our project was born out of
            passion for fitness and a desire to make it accessible to everyone.
          </p>
          <p>
            Our goal is to provide you with all the tools and resources you need
            to create a personalized fitness plan that works for you. Whether
            you're a beginner or a seasoned gym-goer. GymHub has everything you
            need to stay on track and reach your goals.
          </p>
        </Text>
      </Item>
      <Item>
        <Text>
          <Title>About Us</Title>
          <p>
            At GymHub, our team is made up of passionate and experienced
            individuals dedicated to helping you achieve your fitness goals.
            From fitness trainers to nutritionists, our team members bring a
            diverse range of expertise to the table. We are committed to
            providing you with the best possible tools and resources to help you
            succeed on your fitness journey. Get to know us and help us help you
            become the best version of yourself.
          </p>
        </Text>
        <Image src="./svgs/welcome-page-3.jpg" loading="lazy" />
      </Item>
      <Item>
        <Image src="./svgs/welcome-page-2.jpg" loading="lazy" />
        <Text>
          <Title>Partnership</Title>
          <p>
            Looking to partner with us? We're always open to exploring
            collaborations with like-minded brands and individuals who share our
            passion for fitness and wellness. Whether you're a gym owner,
            personal trainer or nutritionist, we're here to suppoprt you and
            help you grow your business. Get in touch with us today to learn
            more about our partnership opportunities and how we can work
            together to empower people to live healthier lives.
          </p>
        </Text>
      </Item>
    </Content>
  );
};

const Image = styled.img`
  width: 45%;
  border-radius: 8px;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;

  & > h1 {
    margin-bottom: 10px;
  }

  & > p {
    margin-bottom: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 80px;
`;
const Title = styled.h1``;
