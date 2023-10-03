import React from "react";
import styled from "styled-components";
import { Review } from "./Review";
import { useReviews } from "./hooks/useReviews";
import { LeftArrowIcon, RightArrowIcon } from "assets/index";

export const OpinionsSection = () => {
  const reviews = useReviews();

  return (
    <Container>
      <Content>
        <TitleSection>
          <Title>What everyone says</Title>
          <Arrows>
            <LeftArrow src={LeftArrowIcon} />
            <RightArrow src={RightArrowIcon} />
          </Arrows>
        </TitleSection>
        <ReviewsSection>
          {reviews.map((el: any) => (
            <Review
              key={el.id}
              text={el.text}
              author={el.author}
              status={el.status}
              image={el.image}
            />
          ))}
        </ReviewsSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 3rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`;
const Title = styled.span`
  font-size: 3rem;
  font-size: bold;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;
const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12%;
`;
const LeftArrow = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
const RightArrow = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
const ReviewsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;
