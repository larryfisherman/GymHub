import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../store/userSlice";
import { InfinitySpin } from "react-loader-spinner";
import { NotifyUser } from "../../../helpers/NotifyUser/NotifyUser";
import { ToastContainer } from "react-toastify";
import { config } from "../../../config";
import {
  CrossIconImg,
  LogoImg,
  EyeOpenedGrey,
  EyeClosedGrey,
} from "assets/index";

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
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <Container>
      {loading ? (
        <SpinnerWrapper>
          <InfinitySpin />
        </SpinnerWrapper>
      ) : (
        <Content>
          <UpperSection>
            <CrossIcon
              src={CrossIconImg}
              onClick={() => setShowRegisterPopup(false)}
            />
            <Logo src={LogoImg} />
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
              src={showPassword ? EyeOpenedGrey : EyeClosedGrey}
              onClick={() => setShowPassword(!showPassword)}
            />
          </PasswordSection>
          <ConfirmButton
            onClick={() => {
              setLoading(true);
              axios
                .post(
                  "https://gymhubb.azurewebsites.net/api/user/register",
                  {
                    name: nameValue,
                    email: emailValue,
                    password: passwordValue,
                  },
                  { timeout: 5000 }
                )
                .then((res) => {
                  navigate("/login");
                  NotifyUser(res);
                })
                .catch((err) => {
                  if (axios.isCancel(err)) {
                    NotifyUser("Request was canceled due to timeout.");
                  } else {
                    NotifyUser(err);
                  }
                })
                .finally(() => setLoading(false));
            }}
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
              Don't want to create an account? Use already created one and skip
              to the good part!{" "}
              <span
                onClick={() => {
                  setLoading(true);
                  axios
                    .post(
                      "https://gymhubb.azurewebsites.net/api/user/login",
                      {
                        email: config.defaultEmail,
                        password: config.defaultPassword,
                      },
                      {
                        timeout: 5000,
                      }
                    )
                    .then((res) => {
                      localStorage.setItem("token", res.data.token);
                      dispatch(login(res.data));
                      setLoading(false);
                      navigate("/home");
                    })
                    .catch((err) => {
                      if (axios.isCancel(err)) {
                        NotifyUser("Request was canceled due to timeout.");
                      } else {
                        NotifyUser(err);
                      }
                    })
                    .finally(() => setLoading(false));
                }}
              >
                Hop in!
              </span>
            </GuestLogin>
          </Footer>
        </Content>
      )}
      <ToastContainer />
    </Container>
  );
};

const SpinnerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9999;
`;

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
  z-index: 9999;
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

  &:focus {
    outline: none;
  }

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
