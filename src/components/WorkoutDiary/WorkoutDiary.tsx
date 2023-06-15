import React from "react";
import styled from "styled-components";

import { Avatar } from "@material-ui/core";

export const WorkoutDiary = () => {
  return (
    <Container>
      <Content>
        {/* <MainSection>
          <Header>
            <span>
              Let's Get To
              <p>
                <b>Workout Diary</b>
              </p>
            </span>
            <ProfileSection>
              <Avatar sizes="large" variant="square" />
              <ProfileSectionBottom>
                <h2>Albert Karkut</h2>
                <span>Krakow, Poland</span>
              </ProfileSectionBottom>
            </ProfileSection>
          </Header>
        </MainSection> */}
        WORKOUT DIARY
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Content = styled.div`
  display: flex;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileSectionBottom = styled.div`
  padding-left: 15px;
`;

const MainSection = styled.div``;
