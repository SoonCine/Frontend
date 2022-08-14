import React from 'react';
import styled from 'styled-components';

const MainHeader = () => {
  return (
    <HeaderWrap>
      <h1>순씨네</h1>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  height: 6rem;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const HeaderMenu = styled.div``;

export default MainHeader;
