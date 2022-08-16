import React from 'react';
import styled from 'styled-components';

const MainNav = () => {
  return (
    <MainNavBar>
      <p>환영합니다. 배성열</p>
      <button>로그아웃</button>
    </MainNavBar>
  );
};

const MainNavBar = styled.div`
  justify-content: end;
  display: flex;
`;

export default MainNav;
