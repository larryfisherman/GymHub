import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  target: string;
  progress: number;
  icon: string;
}

export const Goal = ({ title, target, progress, icon }: Props) => {
  return (
    <Container>
      <Content>
        <Details>
          <h4>{title}</h4>
          <span>
            {progress}/{target}
          </span>
        </Details>
        <ProgressGraph></ProgressGraph>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 30%;
  width: 100%;
  background-color: grey;
  border-radius: 20px;
  margin-top: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Details = styled.div``;

const ProgressGraph = styled.div``;
