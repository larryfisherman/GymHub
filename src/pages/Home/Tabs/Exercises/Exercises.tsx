import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Exercise } from "./Exercise";
import { Category } from "./Category";
import { useDispatch } from "react-redux";
import { setExercisesStore } from "../../../../store/exercisesSlice";

export const Exercises = () => {
  const [exercises, setExercises] = useState([
    {
      id: 1,
      title: "Miliatry press",
      sets: 4,
      repeats: 6,
    },
    {
      id: 2,
      title: "Standing dumbbell press",
      sets: 3,
      repeats: 10,
    },
    {
      id: 3,
      title: "Yoga",
      sets: 2,
      repeats: 4,
    },
    {
      id: 4,
      title: "Bench press",
      sets: 4,
      repeats: 6,
    },
  ]);

  const dispatch = useDispatch();

  dispatch(setExercisesStore(exercises));

  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Arms",
    },
    { id: 2, title: "Chest" },
    { id: 3, title: "Back" },
    { id: 4, title: "Abs" },
    { id: 5, title: "Endurance" },
  ]);
  return (
    <Container>
      <Content>
        <TitleSection>
          <PreTitle>Explore</PreTitle>
          <Title>Exercise Library</Title>
        </TitleSection>
        <Categories>
          {categories.map((el: any) => (
            <Category key={el.id} title={el.title} />
          ))}
        </Categories>
        <ExercisesSection>
          {exercises.map((el: any) => (
            <Exercise key={el.id} id={el.id} title={el.title} />
          ))}
        </ExercisesSection>
      </Content>
    </Container>
  );
};

const Categories = styled.div`
  display: flex;
  width: 100%;
`;
const ExercisesSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

const TitleSection = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const PreTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 100;
`;
const Title = styled.span`
  font-size: 2rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
