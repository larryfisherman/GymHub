import React from "react";
import styled from "styled-components";

interface Props {
  icon: string;
  title: string;
  text: string;
}

export const UpperSectionItem = ({ icon, title, text }: Props) => {
  return (
    <Container>
      <Content>
        <Icon src={`./assets/${icon}.svg`} />
        <Title>{title}</Title>
        <Text>{text}</Text>
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
  height: 100%;
  padding: 30px 50px;
`;

const Icon = styled.img`
  width: 10%;
  margin-bottom: 20px;
`;

const Title = styled.b`
  margin-bottom: 30px;
`;
const Text = styled.p``;
