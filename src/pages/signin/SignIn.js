import { React } from "react";
import { useDispatch, useEffect } from "react-redux/es/exports";
import { checkEmailThunk } from "../../redux/modules/user";
import { useNavigate } from "react-router-dom";
import useInput from "../../hook/hook";
import axios from "axios";
//styled import
import {
  MainForm,
  MainBody,
  TitleDiv,
  IdInputArea,
  PwInputArea,
  ButtonTotalArea,
  LoginDiv,
  SignUpDiv,
} from "./SignInStyled";
import { TotalButton } from "../../component/totalButton/TotalButtonStyled";
import { TotalInput } from "../../component/totalInput/TotalInputStyled";

const Login = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const userInfomation = { email: email, password: password };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sign = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/todos", userInfomation)
      .then((res) => {
        res.data
          ? navigate("/main")
          : alert("이메일 비밀번호를 다시 확인해주세요.");
      });
  };

  return (
    <>
      <MainBody>
        <TitleDiv></TitleDiv>
        <MainForm onSubmit={(event) => sign(event)}>
          <IdInputArea>
            <TotalInput
              placeholder="ID"
              value={email}
              onChange={setEmail}
              required
            />
          </IdInputArea>

          <PwInputArea>
            <TotalInput
              placeholder="PW"
              value={password}
              onChange={setPassword}
              required
            />
          </PwInputArea>

          <ButtonTotalArea>
            <LoginDiv>
              <TotalButton
                onClick={(e) => {
                  sign(e);
                }}
              >
                로그인
              </TotalButton>
            </LoginDiv>
            <SignUpDiv>
              <TotalButton
                onClick={() => {
                  navigate("/signup");
                }}
              >
                회원가입
              </TotalButton>
            </SignUpDiv>
          </ButtonTotalArea>
        </MainForm>
      </MainBody>
    </>
  );
};

export default Login;
