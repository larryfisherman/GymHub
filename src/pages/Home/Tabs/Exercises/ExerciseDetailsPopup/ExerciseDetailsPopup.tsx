import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import { useExerciseVideo } from "./hooks/useExerciseVideo";

interface Props {
  id: number;
  setShowExerciseDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ExerciseDetailsPopup = ({ id, setShowExerciseDetails }: Props) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`https://localhost:44390/api/exercises/${id}`)
      .then((res: any) => setData(res.data));
  }, []);

  return (
    <Container>
      <Content>
        <PopupActions>
          <ExitIcon
            src="./assets/cross-icon.svg"
            onClick={() => setShowExerciseDetails(false)}
          />
        </PopupActions>
        <UpperSection>
          <VideoSection>{useExerciseVideo("F3QY5vMz_6I")}</VideoSection>
          <DetailsSection>
            <Title>{data.title}</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis suscipit beatae dicta deserunt odit, voluptatibus ea
              itaque unde odio rem quisquam, dolor possimus ad. Maxime id at
              similique facere laborum?
            </Description>
          </DetailsSection>
        </UpperSection>
      </Content>
    </Container>
  );
};

const Description = styled.span`
  display: flex;
  flex: 1;
`;

const Title = styled.span`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ExitIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
const PopupActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 1rem;
  margin-right: 2rem;
`;
const UpperSection = styled.div`
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  background-color: white;
  height: 100%;
  width: 55%;
  text-align: left;
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
