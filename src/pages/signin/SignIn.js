import React from 'react';
import { useSelector, useDispatch, useEffect } from 'react-redux/es/exports';
import { useState } from 'react';
import axios from 'axios';
import { checkEmailThunk } from '../../redux/modules/user';
//styled import
import {
  MainForm,
  MainBody,
  TitleDiv,
  IdInputArea,
  PwInputArea,
  ButtonTotalArea
} from './SignInStyled';
import { TotalButton } from '../../component/totalButton/TotalButtonStyled';
import { TotalInput } from '../../component/totalInput/TotalInputStyled';

const Login = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const testDummy = {
    title: 'asdasd',
    author: 'asdasd',
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
            <TotalButton>로그인</TotalButton>
            <TotalButton>회원가입</TotalButton>
          </ButtonTotalArea>
        </MainForm>
      </MainBody>
    </>
  );
};

export default Login;
