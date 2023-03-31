import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export const LoginUser = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  return (
    <Container>
      <Content>
        Email:
        <EmailInput
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        Password:
        <PasswordInput
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        Confirm:
        <ConfirmButton
          onClick={() =>
            axios.post("https://localhost:44390/api/user/login", {
              email: emailValue,
              password: passwordValue,
            })
          }
        >
          Log in!
        </ConfirmButton>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;
const Content = styled.div`
  background-color: white;
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 2%;
  padding: 50px;
  & > input {
    width: 50%;
  }
`;

const EmailInput = styled.input``;
const PasswordInput = styled.input``;
const ConfirmButton = styled.button`
  width: 10%;
`;
