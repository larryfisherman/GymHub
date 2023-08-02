import React from "react";
import styled from "styled-components";
import { useTab } from "../../../hooks/useTab";

interface Props {
  tabToggle: number;
}

export const Main = ({ tabToggle }: Props) => {
  return (
    <Container>
      <Content>{useTab(tabToggle)}</Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  overflow-y: scroll;
`;
const Content = styled.div``;
