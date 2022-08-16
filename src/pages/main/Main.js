import React from 'react';
import { useState, useEffect } from 'react';
import MainHeader from './MainHeader';
import MainList from './MainList';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux/es/exports';
import { movieThunk } from '../../redux/modules/movie';
import user from '../../redux/modules/user';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [list, setList] = useState(null);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios.get('http://54.180.89.34:8080/api/movie/upcomming').then((res) => {
  //     setList(res.data.data.slice(0,12));
  //   });
  // }, []);
  return (
    <MainWrap>
      <button
        onClick={() => {
          dispatch(movieThunk());
        }}
      >
        테스트
      </button>
      <MainHeader />

      <MainNav>환영합니다.</MainNav>

      <MainListContainer>
        {/* {list.map((item) => {
          return (
            <MainList
              // key={item.id}
              img={item.img}
              movieTitle={item.movieTitle}
              movieOpenDate={item.movieOpenDate.split(" ")[0]}
            />
          );
        })} */}
      </MainListContainer>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  /* background-image: url('https://firebasestorage.googleapis.com/v0/b/mymagazinepjt.appspot.com/o/animeImg%2F1655318752651?alt=media&token=fd310dd0-8c16-43e2-ac33-60733fa82791'); */
  border: 2px solid white;
  height: 100vh;
`;
const MainNav = styled.div`
  justify-content: end;
`;

const MainListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Main;
