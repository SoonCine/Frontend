import React from 'react';
import { useSelector, useDispatch, useEffect } from 'react-redux/es/exports';
import { useState } from 'react';
import axios from 'axios';
import { checkEmailThunk } from '../../redux/modules/user';

const Login = () => {
  const dispatch = useDispatch();

  const testDummy = {
    title: 'asdasd',
    author: 'asdasd',
  };

  const sign = async () => {
    dispatch(checkEmailThunk(testDummy));
    //서버에 올리고 올린 데이터값이 리턴값으로 반환된다.
  };

  return (
    <div>
      <button onClick={sign}>+</button>
    </div>
  );
};

export default Login;
