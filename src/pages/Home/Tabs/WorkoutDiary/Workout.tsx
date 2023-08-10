import React, { useState } from "react";
import styled from "styled-components";
import { ConfirmationModal } from "../../../../components/ConfirmationModal/ConfirmationModal";
import axios from "axios";
import { NotifyUser } from "../../../../helpers/NotifyUser/NotifyUser";
import { ToastContainer } from "react-toastify";

interface Props {
  title: string;
  id: number;
  favourite: boolean;
  timeToBeDone: number;
  kcal: number;
  setShowEditWorkoutDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setWorkoutId: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getWorkouts: () => void;
}

export const Workout = ({
  title,
  timeToBeDone,
  kcal,
  setShowEditWorkoutDetails,
  setWorkoutId,
  id,
  setLoading,
  getWorkouts,
}: Props) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  return (
    <Container>
      {showConfirmationModal ? (
        <ConfirmationModal
          message="Are you sure you want to remove a workout?"
          onCancel={() => setShowConfirmationModal(false)}
          onConfirm={() => {
            setLoading(true);
            axios
              .delete(`https://gymhub.azurewebsites.net/api/workouts/${id}`)
              .then((res) => NotifyUser(res, "Workout removed"))
              .finally(() => {
                setLoading(false);
                setShowConfirmationModal(false);
                getWorkouts();
              })
              .catch((err) => NotifyUser(err));
          }}
        />
      ) : (
        <Content
          style={{
            background: `url('./assets/workout-${
              Math.floor(Math.random() * 8) + 1
            }.svg') center center / cover`,
          }}
        >
          <TitleSection>
            <Title>{title}</Title>
            <TrashIcon
              src="./assets/trash-icon.svg"
              onClick={() => setShowConfirmationModal(true)}
            />
          </TitleSection>
          {timeToBeDone && kcal && (
            <DescriptionSection>
              <TimeAndKcal>
                <Icon src="./assets/clock-icon.svg" />
                <Text>{timeToBeDone} </Text>
              </TimeAndKcal>
              <TimeAndKcal>
                <Icon src="./assets/fire-kcal-icon.svg" />
                <Text>{kcal}</Text>
              </TimeAndKcal>
            </DescriptionSection>
          )}

          <StartButton
            onClick={() => {
              setShowEditWorkoutDetails(true);
              setWorkoutId(id);
            }}
          >
            SEE MORE
          </StartButton>
        </Content>
      )}
    </Container>
  );
};

const Text = styled.span`
  font-size: 1rem;
  width: 30%;
`;
const Icon = styled.img`
  width: 2.5rem;
`;

const TimeAndKcal = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
`;

const Title = styled.span`
  text-align: left;
`;

const Container = styled.div`
  width: 39rem;
  height: 20rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: space-between;
  background-color: white;
  padding: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 100%;

    span {
      width: 100%;
      display: inline-block;
      white-space: nowrap;
    }
  }
`;

const TrashIcon = styled.img`
  width: 6%;
  &:hover {
    cursor: pointer;
  }
`;

const DescriptionSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StartButton = styled.button`
  display: flex;
  width: 12rem;
  min-height: 5rem;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 3%;
  border: none;
  background-color: orange;
  color: white;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
