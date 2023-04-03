import React from "react";
import styled from "styled-components";
import { UpperSectionItem } from "./UpperSectionItem";

export const UpperSection = () => {
  return (
    <Container>
      <Content>
        <UpperSectionItem />
        <UpperSectionItem />
        <UpperSectionItem />
      </Content>
    </Container>
  );
};

const Container = styled.div``;
const Content = styled.div`
  display: flex;
`;
