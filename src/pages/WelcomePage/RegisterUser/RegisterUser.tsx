import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../store/userSlice";

interface Props {
  setShowRegisterPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLoginPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterUser = ({
  setShowRegisterPopup,
  setShowLoginPopup,
}: Props) => {
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <UpperSection>
          <CrossIcon
            src="./assets/cross-icon.svg"
            onClick={() => setShowRegisterPopup(false)}
          />
          <Logo src="./assets/logo.svg" />
        </UpperSection>
        <h1>Create Account</h1>
        <FullNameInput
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          placeholder="Your name"
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
                ? "./assets/eye-opened-grey.svg"
                : "./assets/eye-closed-grey.svg"
            }
            onClick={() => setShowPassword(!showPassword)}
          />
        </PasswordSection>
        <ConfirmButton
          onClick={() =>
            axios
              .post("https://localhost:44390/api/user/register", {
                name: nameValue,
                email: emailValue,
                password: passwordValue,
              })
              .then(() => navigate("/login"))
          }
        >
          CREATE ACCOUNT
        </ConfirmButton>
        <Footer>
          <LoginDescription
            onClick={() => {
              setShowRegisterPopup(false);
              setShowLoginPopup(true);
            }}
          >
            Already have account?&nbsp;
            <span>Log in!</span>
          </LoginDescription>
          <GuestLogin>
            Don't want to create an account? Use already created one and skip to
            the good part!{" "}
            <span
              onClick={() =>
                axios
                  .post("https://localhost:44390/api/user/login", {
                    email: "test@test.com",
                    password: "test123",
                  })
                  .then((res) => {
                    localStorage.setItem("token", res.data.token);
                    dispatch(login(res.data));
                    navigate("/home");
                  })
              }
            >
              Hop in!
            </span>
          </GuestLogin>
        </Footer>
      </Content>
    </Container>
  );
};

const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CrossIcon = styled.img`
  width: 1rem;
`;

const UpperSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > ${CrossIcon} {
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
`;

const ShowPasswordIcon = styled.img`
  border-bottom: 1px solid black;
  &:hover {
    cursor: pointer;
  }
`;

const PasswordSection = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  & > input {
    position: relative;
    border: hidden;
    border-bottom: 1px solid black;
    width: 100%;

    -webkit-autofill {
      -webkit-text-fill-color: yellow !important;
    }

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
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

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
`;

const FullNameInput = styled.input`
  border: hidden;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const EmailInput = styled(FullNameInput)``;

const PasswordInput = styled.input``;

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

const GuestLogin = styled.span`
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
