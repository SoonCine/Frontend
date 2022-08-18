import { React } from 'react';
import { useDispatch, useEffect } from 'react-redux/es/exports';
import { checkEmailThunk } from '../../redux/modules/user';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hook/hook';
import axios from 'axios';

//styled import
import {
  WholeSignIn,
  IntroArea,
  IntroText,
  MainBody,
  Title,
  MainForm,
  LogInTxt,
  WholeInputNButtons,
  Ids,
  TextId,
  InputId,
  Pws,
  TextPw,
  InputPw,
  Buttons,
  LogInButton,
  SignUpButton,
} from './SignInStyled';
import { TotalButton } from '../../component/totalButton/TotalButtonStyled';
import { TotalInput } from '../../component/totalInput/TotalInputStyled';

const Login = () => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const userInfomation = { email: email, password: password };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signCheck = (res) => {
    const token = res.headers.authorization;
    localStorage.setItem('Authorization', token);
    localStorage.setItem('Nickname', res.data.data);
    window.location.reload();
  };
  console.log(process.env.REACT_APP_URL);
  const sign = (event) => {
    event.preventDefault();
    axios
      .post('http://54.180.89.34:8080/api/member/login', userInfomation)
      .then((res) => {
        res.data.data
          ? signCheck(res)
          : alert('이메일 비밀번호를 다시 확인해주세요.');
      });
  };

  return (
    <>
      <WholeSignIn>
        <IntroArea>
          <IntroText>Welcome Back!</IntroText>
        </IntroArea>
        <MainBody>
          <Title>
            <img src="../../SoonCineLogo.png"></img>
          </Title>
          <MainForm>
            <LogInTxt>Log In</LogInTxt>
            <WholeInputNButtons>
              <Ids>
                <TextId>아이디</TextId>
                <InputId value={email} onChange={setEmail} required></InputId>
              </Ids>
              <Pws>
                <TextPw>비밀번호</TextPw>
                <InputPw
                  type="password"
                  value={password}
                  onChange={setPassword}
                  required></InputPw>
              </Pws>
              <Buttons>
                <LogInButton
                  onClick={(e) => {
                    sign(e);
                  }}>
                  로그인
                </LogInButton>
                <SignUpButton
                  onClick={() => {
                    navigate('/signup');
                  }}>
                  회원가입
                </SignUpButton>
              </Buttons>
            </WholeInputNButtons>
          </MainForm>
        </MainBody>
      </WholeSignIn>
    </>
  );
};

export default Login;
