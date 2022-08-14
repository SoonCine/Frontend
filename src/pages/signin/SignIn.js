import React from 'react';
import { useSelector, useDispatch, useEffect } from 'react-redux/es/exports';
import { useState } from 'react';
import axios from 'axios';
import { checkEmailThunk } from '../../redux/modules/user';
import { useNavigate } from 'react-router-dom';
//styled import
import {
  MainForm,
  MainBody,
  TitleDiv,
  IdInputArea,
  PwInputArea,
  ButtonTotalArea,
  LoginDiv,
  SignUpDiv
} from './SignInStyled';
import { TotalButton } from '../../component/totalButton/TotalButtonStyled';
import { TotalInput } from '../../component/totalInput/TotalInputStyled';

const Login = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const testDummy = {
    title: "asdasd",
    author: "asdasd",
  };

  const sign = async () => {
    const a = dispatch(checkEmailThunk(testDummy));
    console.log(a);
  };

  return (
    <>
      <MainBody>
        <TitleDiv>순씨네</TitleDiv>
        <MainForm>
          <IdInputArea>
            <TotalInput placeholder='ID'/>
          </IdInputArea>

          <PwInputArea>
            <TotalInput placeholder='PW' />
          </PwInputArea>

          <ButtonTotalArea>
            <LoginDiv><TotalButton>로그인</TotalButton></LoginDiv>
            <SignUpDiv><TotalButton onClick={()=>{navigate("/signup")}}>회원가입</TotalButton></SignUpDiv>
          </ButtonTotalArea>
        </MainForm>
      </MainBody>
    </>
  );
};

//테스트
export default Login;
