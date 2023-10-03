import React, { useState } from "react";
import styled from "styled-components";
import { ClockIcon, FireKcalIcon, PencilIconImg } from "assets";

export const WorkoutDetailsEditTimeAndKcal = ({ data, setData }: any) => {
  const [timeAndKcalEdit, setTimeAndKcalEdit] = useState(false);

  return (
    <Container>
      <Header>
        <EditIcon
          src={PencilIconImg}
          onClick={() => setTimeAndKcalEdit(!timeAndKcalEdit)}
        />
      </Header>

      <Content>
        <Item style={{ backgroundColor: "#846075" }}>
          <Icon src={ClockIcon} />
          {timeAndKcalEdit ? (
            <>
              <EditInput
                onChange={(e) =>
                  setData((prevState: any) => ({
                    ...prevState,
                    timeToBeDone: e.target.value,
                  }))
                }
                value={data.timeToBeDone}
              />
              min
            </>
          ) : (
            <Text>{data.timeToBeDone} min</Text>
          )}
        </Item>
        <Item style={{ backgroundColor: "#AF5D63" }}>
          <Icon src={FireKcalIcon} />
          {timeAndKcalEdit ? (
            <>
              <EditInput
                onChange={(e) =>
                  setData((prevState: any) => ({
                    ...prevState,
                    kcal: e.target.value,
                  }))
                }
                value={data.kcal}
              />
              kcal
            </>
          ) : (
            <Text>{data.kcal} kcal</Text>
          )}
        </Item>
      </Content>
    </Container>
  );
};

const EditInput = styled.input`
  width: 2.5rem;
  margin-right: 1rem;
  text-align: center;
`;

const Text = styled.span`
  color: #f8f8f8;
`;
const Icon = styled.img`
  width: 2rem;
  margin-right: 1rem;
`;
const EditIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
const Item = styled.div`
  width: 9rem;
  height: 9rem;
  margin: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 30px;
  margin-bottom: 1rem;
  align-items: center;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
