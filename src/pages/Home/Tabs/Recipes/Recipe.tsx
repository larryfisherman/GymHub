import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ConfirmationModal } from "../../../../components/ConfirmationModal/ConfirmationModal";
import { generateRecipeImage } from "./utils/generateRecipeImage";
import { NotifyUser } from "../../../../helpers/NotifyUser/NotifyUser";
import { TrashIconImg, FireKcalIcon, ClockIcon } from "assets";

interface Props {
  title: string;
  description: string;
  kcal: number;
  time: number;
  id: number;
  category: number;
  setShowRecipeDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setRecipeDetailsId: React.Dispatch<React.SetStateAction<number>>;
  getRecipes: () => void;
}

export const Recipe = ({
  title,
  description,
  kcal,
  time,
  setShowRecipeDetails,
  setRecipeDetailsId,
  id,
  getRecipes,
  category,
}: Props) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  return (
    <Container>
      {showConfirmationModal ? (
        <ConfirmationModal
          message="Are you sure you want to delete a recipe?"
          onCancel={() => setShowConfirmationModal(false)}
          onConfirm={() => {
            axios
              .delete(`https://gymhubb.azurewebsites.net/api/recipes/${id}`)
              .then((res) => NotifyUser(res, "Recipe removed"))
              .catch((err) => NotifyUser(err))
              .finally(() => {
                setShowConfirmationModal(false);
                getRecipes();
              });
          }}
          customStyling={{ width: "20rem", height: "28rem" }}
        />
      ) : (
        <Content>
          <TrashIcon
            src={TrashIconImg}
            onClick={() => setShowConfirmationModal(true)}
          />
          <Image src={generateRecipeImage(category)} loading="lazy" />
          <Title>{title}</Title>
          <Description>{description}</Description>
          <CaloriesAndTimeSection>
            {kcal && (
              <CaloriesAndTimeItem>
                <CaloriesAndTimeItemIcon src={FireKcalIcon} />
                <CaloriesAndTimeItemText>{kcal} kcal</CaloriesAndTimeItemText>
              </CaloriesAndTimeItem>
            )}
            {time && (
              <CaloriesAndTimeItem>
                <CaloriesAndTimeItemIcon src={ClockIcon} />
                <CaloriesAndTimeItemText>
                  {time ? ` ${time} minutes` : null}
                </CaloriesAndTimeItemText>
              </CaloriesAndTimeItem>
            )}
          </CaloriesAndTimeSection>
          <SeeMoreButton
            onClick={() => {
              setShowRecipeDetails(true);
              setRecipeDetailsId(id);
            }}
          >
            SEE MORE
          </SeeMoreButton>
        </Content>
      )}
    </Container>
  );
};

const TrashIcon = styled.img`
  display: flex;
  align-self: flex-end;

  &:hover {
    cursor: pointer;
  }
`;

const CaloriesAndTimeItem = styled.div`
  display: flex;
`;

const CaloriesAndTimeItemText = styled.span``;

const CaloriesAndTimeItemIcon = styled.img`
  width: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin-top: 0;
    left: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  min-width: 20rem;
  min-height: 28rem;
  height: 28rem;
  padding: 1.875rem;
  background-color: rgb(21, 34, 56);
  color: white;
  width: 30%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.title`
  display: flex;
  justify-content: space-between;
  position: relative;
  font-size: 1.2rem;
  top: -3rem;
  @media (max-width: 768px) {
    width: 100%;

    span {
      width: 100%;
      display: inline-block;
      white-space: nowrap;
    }
  }
`;

const Description = styled.span`
  overflow-wrap: break-word;
  font-size: 0.8rem;
  max-height: 5rem;
  min-height: 4rem;
  overflow-y: scroll;
  position: relative;
  top: -2rem;

  @media (max-width: 768px) {
    width: 80%;
    padding-left: 0;
  }

  ::-webkit-scrollbar {
    height: 10px;
  }
`;

const CaloriesAndTimeSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const SeeMoreButton = styled.button`
  display: flex;
  min-width: 10rem;
  min-height: 4rem;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 5%;
  border: none;
  background-color: #a5c882;
  color: white;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Image = styled.img`
  position: relative;
  min-height: 12rem;
  border-radius: 50%;
  border: 1px solid black;
  z-index: 2;
  top: -4rem;
`;
