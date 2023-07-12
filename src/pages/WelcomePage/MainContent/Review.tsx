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
  height: 100%;
  width: 20%;
`;
const Content = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  border: 1px solid lightgrey;
  box-shadow: 0.5px 0.5px 0.5px 0.5px lightgray;
  justify-content: space-between;
  border-radius: 5%;
  padding: 0.8rem;
  min-height: 18rem;
  width: 100%;
`;

const Text = styled.span`
  width: 85%;
  font-size: 0.9rem;
  text-align: left;
`;
const AuthorSection = styled.div`
  display: flex;
  width: 60%;
  height: 6rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  align-items: center;
`;
const AuthorData = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  margin-top: 1.5rem;
`;
const Image = styled.img`
  width: 3rem;
  display: flex;
  margin-right: 2rem;
`;
const Author = styled.span``;
const Status = styled.span`
  font-weight: 100;
  color: gray;
  font-size: 12px;
`;
