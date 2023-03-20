import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { Goal } from "./Goal";

export const UserSideBar = () => {
  return (
    <Container>
      <Content>
        <PersonalDataSection>
          <Avatar sizes="large" variant="square" />
          <PersonalDataBottomSection>
            <h2>Albert Karkut</h2>
            <span>Krakow, Poland</span>
          </PersonalDataBottomSection>
        </PersonalDataSection>
        <BodyDataSection>
          <WeightSection>
            <span>86kg</span>
            <b>Weight</b>
          </WeightSection>
          <HeightSection>
            <span>185cm</span>
            <b>Height</b>
          </HeightSection>
          <AgeSection>
            <span>23yrs</span>
            <b>Age</b>
          </AgeSection>
        </BodyDataSection>
        <GoalsSection>
          <h3>Your goals</h3>

          <Goal title="Running" target="80km" progress={60} icon="test" />
          <Goal
            title="Boxing"
            target="4 times a week"
            progress={30}
            icon="test"
          />
          <Goal title="Cycling" target="66" progress={20} icon="test" />
        </GoalsSection>
        <ProgressSection></ProgressSection>
      </Content>
    </Container>
  );
};

const BodyDataSection = styled.div`
  display: flex;
  background-color: grey;
  padding: 20px;
  border-radius: 20px;
  justify-content: space-between;
  width: 90%;
`;

const WeightSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeightSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const AgeSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const PersonalDataSection = styled.div`
  display: flex;
`;

const PersonalDataBottomSection = styled.div`
  padding-left: 20px;

  & > span {
    font-size: 14px;
    opacity: 0.5;
  }
`;

const GoalsSection = styled.div`
  height: 40%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // overflow-y: scroll;
`;

const ProgressSection = styled.div``;
