import React from 'react';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import useInput from '../../hook/hook';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

//styled import
import {
  WholeSignUp,
  MainBody,
  MainForm,
  SignUpTxt,
  WrapIdPwNickBtn,
  IdArea,
  IdInput,
  IdButton,
  PwArea,
  PwInput1,
  PwInput2,
  NicknameArea,
  NickInput,
  NickButton,
  SaveButton,
} from './SignUpStyled';
import { TotalButton } from '../../component/totalButton/TotalButtonStyled';

const SignUp = () => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [checkPw, setCheckPw] = useInput('');
  const [nickName, setNickName] = useInput('');
  const [E_Check, setE_check] = useState(false);
  const [N_Check, setN_Check] = useState(false);
  const [P_Check, setP_check] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkEmail = { email: email };
  const checkNickname = { nickname: nickName };
  const signUpData = {
    nickname: nickName,
    email: email,
    password: password,
    passwordConfirm: password,
  };
  useEffect(() => {
    password === checkPw ? setP_check(true) : setP_check(false);
  }, [checkPw]);
const URL = process.env.REACT_APP_URL

  // password === checkPw ? setP_check(true) : setP_check(false)
  // console.log(P_Check)

  const signUpCheck = (event) => {
    console.log('가냐:::::');
    event.preventDefault();
    if (N_Check && E_Check) {
      if(P_Check){
      axios
        .post(`${URL}/api/member/signup`, signUpData)
        .then(() => navigate('/'));

    }}
    if (E_Check === false) {
      axios
        .post(`${URL}/api/members/emailcheck`, checkEmail)
        .then((res) => {
          if (res.data.data) {
            alert('사용 가능한 이메일 입니다.');
            setE_check(res.data.data);
          } else {
            alert('이미 가입한 이메일 입니다.');
            setE_check(res.data.data);
          }
        });
    } else if (N_Check === false) {
      axios
        .post(
          `${URL}/api/members/nicknamecheck`,
          checkNickname
        )
        .then((res) => {
          if (res.data.data) {
            alert('사용 가능한 닉네임 입니다.');
            setN_Check(res.data.data);
          } else {
            alert('이미 사용중인 닉네임 입니다.');
            setE_check(res.data.data);
          }
        });
    } else if (P_Check === false) {
      alert('비밀번호를 다시 확인해주세요.');
    }
  };

  return (
    <WholeSignUp>
      <MainBody>
        <MainForm onSubmit={(event) => signUpCheck(event)}>
          <SignUpTxt>Sign Up</SignUpTxt>
          <WrapIdPwNickBtn>
            <IdArea>
              <IdInput
                value={email}
                onChange={setEmail}
                placeholder="  이메일"

                required
              ></IdInput>
              <IdButton onClick={(event)=>signUpCheck(event)}>중복 확인</IdButton>
            </IdArea>
            {/* <PwArea> */}
            <PwInput1
              placeholder="  비밀번호"
              value={password}
              onChange={setPassword}
              minLength={6}
              required
              type="password"
              // required
            ></PwInput1>
            <PwInput2
              placeholder="  비밀번호 확인"
              value={checkPw}
              onChange={setCheckPw}
              minLength={6}
              type="password"
              required
              // required
            ></PwInput2>
            {/* </PwArea> */}
            <NicknameArea>
              <NickInput
                placeholder="  닉네임"
                value={nickName}
                onChange={setNickName}
                maxLength={8}
                required
                // required
              ></NickInput>

              <NickButton onClick={(event)=>signUpCheck(event)}>중복 확인</NickButton>
            </NicknameArea>
            <SaveButton onClick={(event)=>signUpCheck(event)}>등록!</SaveButton>
          </WrapIdPwNickBtn>
        </MainForm>
      </MainBody>
    </WholeSignUp>
  );
};

export default SignUp;
