import React from "react";
import styled from "styled-components";
import { useTab } from "../../../hooks/useTab";

interface Props {
  tabToggle: any;
}

export const Main = ({ tabToggle }: Props) => {
  return (
    <Container>
      <Content>{useTab(tabToggle)}</Content>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  background-color: grey;
`;
const Content = styled.div``;
