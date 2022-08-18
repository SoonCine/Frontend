import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainNav = () => {
  const navigate = useNavigate();
  const nickName = localStorage.getItem('Nickname');
  // console.log(object);

  const logOut = () => {
    localStorage.clear();
    // 로컬스토리지에 있는 토큰값 삭제
    window.location.reload();
    // 페이지 리로딩
    navigate('/');
  };

  return (
    <MainNavBar>
      <p>환영합니다. {nickName}</p>
      <button onClick={logOut}>로그아웃</button>
    </MainNavBar>
  );
};

const MainNavBar = styled.div`
  justify-content: end;
  display: flex;
`;

export default MainNav;
