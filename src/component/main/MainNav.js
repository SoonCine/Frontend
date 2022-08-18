import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainNav = () => {
  const navigate = useNavigate();
  const nickName = localStorage.getItem('Nickname');

  const logOut = () => {
    localStorage.clear();
    // 로컬스토리지에 있는 토큰값 삭제
    window.location.reload();
    // 페이지 리로딩
    navigate("/");
  };

  return (
    <MainNavBar>
      <p>
        <NicknameAtag href="/profile">{nickName}</NicknameAtag>님, 환영합니다
      </p>
      <LogoutButton onClick={logOut}>로그아웃</LogoutButton>
    </MainNavBar>
  );
};

const MainNavBar = styled.div`
  width: 850px;
  justify-content: flex-end;
  display: flex;
  /* background-color: blue; */
`;

const LogoutButton = styled.button`
  width: 70px;
  height: 38px;
  margin: 7px 0px 0px 20px;
  border-radius: 20px;
  border: 1px solid black;
  cursor: pointer;
  background-color: rgb(252, 249, 242);
`;

const NicknameAtag = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline solid 1px black;
  }
`;

export default MainNav;
