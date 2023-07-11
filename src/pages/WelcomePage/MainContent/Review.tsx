import React from "react";
import styled from "styled-components";

interface Props {
  author: string;
  status: string;
  text: string;
  image: string;
}

export const Review = ({ author, status, text, image }: Props) => {
  return (
    <Container>
      <Content>
        <Text>{text}</Text>
        <AuthorSection>
          <Image src={image} />
          <AuthorData>
            <Author>{author}</Author>
            <Status>{status}</Status>
          </AuthorData>
        </AuthorSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 50%;
  width: 50%;
  background-color: white;
`;
const Content = styled.div`
  display: flex;
  border: 2px solid black;
  flex-direction: column;
  height: 15rem;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span``;
const AuthorSection = styled.div`
  display: flex;
`;
const AuthorData = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img``;
const Author = styled.span``;
const Status = styled.span``;
