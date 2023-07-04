import React, { useState } from "react";
import styled from "styled-components";
import { NavSideBar } from "../../components/NavSideBar/NavSideBar";
import { Main } from "./Main/Main";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

export const Home = () => {
  const [tabToggle, setTabToggle] = useState(1);

  const user = useSelector(selectUser);
  console.log(user);

  return (
    <>
      <Container>
        <Content>
          <NavSideBar setTabToggle={setTabToggle} />
          <Main tabToggle={tabToggle} />
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
