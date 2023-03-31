import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

interface Props {
  setShowRegisterPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterUser = ({ setShowRegisterPopup }: Props) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [fullNameValue, setFullNameValue] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <Content>
        <UpperSection>
          <span onClick={() => setShowRegisterPopup(false)}>X</span>

          <Logo src="./svgs/logo.svg" />
        </UpperSection>

        <h1>Create Account</h1>
        <FullNameInput
          value={fullNameValue}
          onChange={(e) => setFullNameValue(e.target.value)}
          placeholder="Full Name"
        />
        <EmailInput
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="Email"
        />
        <PasswordSection>
          <PasswordInput
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          <ShowPasswordIcon
            src={
              showPassword
                ? "./svgs/eye-opened-grey.svg"
                : "./svgs/eye-closed-grey.svg"
            }
            onClick={() => setShowPassword(!showPassword)}
          />
        </PasswordSection>
        <ConfirmButton
          onClick={() =>
            axios.post("https://localhost:44390/api/user/register", {
              email: emailValue,
              password: passwordValue,
            })
          }
        >
          CREATE ACCOUNT
        </ConfirmButton>
        <LoginDescription
          onClick={() => {
            setShowRegisterPopup(false);
          }}
        >
          Already have account?&nbsp;
          <span>Log in!</span>
        </LoginDescription>
      </Content>
    </Container>
  );
};

const UpperSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > span {
    align-self: flex-end;
    font-size: 24px;
    font-weight: 300;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Logo = styled.img`
  height: 6rem;

  &:hover {
    cursor: pointer;
  }
`;

const ShowPasswordIcon = styled.img`
  border-bottom: 1px solid black;

  &:hover {
    cursor: pointer;
  }
`;

const PasswordSection = styled.div`
  width: 50%;
  display: flex;

  & > input {
    border: hidden;
    border-bottom: 1px solid black;
    padding-bottom: 5px;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

const PasswordInput = styled.input`
  border: hidden;
  border-bottom: 1px solid black;
  padding-bottom: 5px;

  &:focus {
    outline: none;
  }
`;

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

  & > span {
  }
`;
const Content = styled.div`
  background-color: white;
  width: 60%;
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

const FullNameInput = styled.input`
  border: hidden;
  border-bottom: 1px solid black;
  padding-bottom: 5px;

  &:focus {
    outline: none;
  }
`;
const EmailInput = styled.input`
  border: hidden;
  border-bottom: 1px solid black;
  padding-bottom: 5px;

  &:focus {
    outline: none;
  }
`;

const ConfirmButton = styled.button`
  letter-spacing: 3px;
  padding: 15px;
  width: 40%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: orange;
  color: rgba(255, 255, 255);
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

const LoginDescription = styled.span`
  color: black;
  text-decoration: none;
  width: 100%;
  & > span {
    font-weight: 600;
    color: orange;
  }

  &:hover {
    cursor: pointer;
  }
`;
