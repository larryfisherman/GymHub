import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export const RegisterUser = () => {
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
            axios.post("https://localhost:44390/api/user/register", {
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
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  & > input {
    width: 50%;
  }
`;

const EmailInput = styled.input``;
const PasswordInput = styled.input``;
const ConfirmButton = styled.button`
  width: 10%;
  heig
`;
