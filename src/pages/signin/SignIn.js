import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useState } from 'react';
import { changename } from '../../redux/modules/user';

const Login = () => {
  const dummy = useSelector((state) => state.name);

  const dispatch = useDispatch();

  console.log(dummy);

  const goname = () => {
    dispatch(changename('inho'));
  };

  return (
    <div>
      <button onClick={goname}>+</button>
    </div>
  );
};

export default Login;
