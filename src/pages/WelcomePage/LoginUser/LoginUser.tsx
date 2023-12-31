import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { login } from "../../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { NotifyUser } from "../../../helpers/NotifyUser/NotifyUser";
import { ToastContainer } from "react-toastify";
import {
  CrossIconImg,
  LogoImg,
  EyeClosedGrey,
  EyeOpenedGrey,
} from "assets/index";

interface Props {
  setShowLoginPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginUser = ({ setShowLoginPopup }: Props) => {
  const [emailValue, setEmailValue] = useState("");
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
              onClick={() => setShowLoginPopup(false)}
            />
            <Logo src={LogoImg} />
          </UpperSection>
          <h1>Log In</h1>
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
                  "https://gymhubb.azurewebsites.net/api/user/login",
                  {
                    email: emailValue,
                    password: passwordValue,
                  },
                  { timeout: 5000 }
                )
                .then((res) => {
                  localStorage.setItem("token", res.data.token);
                  dispatch(login(res.data));
                  navigate("/home");
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
            LOG IN
          </ConfirmButton>
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

  & > input {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;

    & > input {
      width: 100%;
    }
  }
`;

const EmailInput = styled.input`
  border: hidden;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
  width: 100%;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PasswordInput = styled(EmailInput)``;

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
