import React from "react";
import styled from "styled-components";

interface Props {
  icon: string;
  title: string;
  text: string;
}

export const UpperSectionItem = () => {
  return (
    <Container>
      <Content>
        {/* <Icon src={`./svgs/${icon}`} />
        <Title>{title}</Title>
        <Text>{text}</Text> */}
        <Icon src={`./svgs/recipe-gray-icon.svg`} />
        <Title>Recipes</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sint
          voluptates, sapiente laudantium facere, aperiam ipsa animi quos, esse
          ab quidem quisquam? Neque quaerat accusantium odio dicta deleniti
          saepe recusandae.
        </Text>
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
  align-items: center;
  padding: 0px 50px;
`;

const Icon = styled.img`
  width: 10%;
`;
const Title = styled.p``;
const Text = styled.p``;
