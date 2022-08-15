import React from 'react';
import MainHeader from './MainHeader';
import MainList from './MainList';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react-redux/es/exports';
import { getMovieListThunk } from '../../redux/modules/movieList';

const Main = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList.movieList);

  useEffect(() => {
    dispatch(getMovieListThunk());
  }, []);

  return (
    <MainWrap>
      <MainHeader />

      <MainNav>
        <p>환영합니다. 배성열</p>
        <button>로그아웃</button>
      </MainNav>

      <MainListContainer onclick={() => {}}>
        {movieList.map((item, index) => {
          return (
            <MainList
              key={item.id}
              movieList={item}
              // setMovieList={setMovieList}
            />
          );
        })}
      </MainListContainer>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border: 2px solid white;
  height: 100vh;

  /* background-image: url('https://firebasestorage.googleapis.com/v0/b/mymagazinepjt.appspot.com/o/animeImg%2F1655318752651?alt=media&token=fd310dd0-8c16-43e2-ac33-60733fa82791'); */
`;
const MainNav = styled.div`
  justify-content: end;
  display: flex;
`;

const MainListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Main;
