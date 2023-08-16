import React from "react";
import styled from "styled-components";
import axios from "axios";
import YouTube from "react-youtube";
import { useExerciseVideo } from "./hooks/useExerciseVideo";

interface Props {
  id: number;
  setShowExerciseDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ExerciseDetailsPopup = ({ id, setShowExerciseDetails }: Props) => {
  return (
    <Container>
      <Content>
        <PopupActions>
          <Button onClick={() => () => console.log("klik")}>SAVE</Button>
          <ExitIcon
            src="./assets/cross-icon.svg"
            onClick={() => setShowExerciseDetails(false)}
          />
        </PopupActions>
        <UpperSection>
          <VideoSection>{useExerciseVideo("F3QY5vMz_6I")}</VideoSection>
          <DetailsSection></DetailsSection>
        </UpperSection>
      </Content>
    </Container>
  );
};

const Video = styled.video`
  width: 100%;
  height: 100%;
`;
const VideoSource = styled.source``;

const YouTubeContainer = styled.div`
  position: relative;
`;

const ExitIcon = styled.img``;
const Button = styled.button``;
const PopupActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 1rem;
  margin-right: 2rem;
`;
const UpperSection = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  padding: 1rem;
`;
const VideoSection = styled.div`
  background-color: black;
  height: 100%;
  width: 40%;
`;
const DetailsSection = styled.div`
  background-color: white;
  height: 100%;
  width: 55%;
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 333;
  overflow: hidden;
`;
const Content = styled.div`
  width: 88.5%;
  height: 100%;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 30px;
  overflow-y: scroll;
`;
