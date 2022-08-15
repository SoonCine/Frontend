import React from 'react';
import { useState } from 'react';
import MainHeader from './MainHeader';
import MainList from './MainList';
import styled from 'styled-components';

const Main = () => {
  const [movieList, setMovieList] = useState([
    {
      id: 0,
      movieTitle: '올드보이',
      movieDate: '22/8/14',
      movieImage:
        'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
      likeCount: '2',
    },
    {
      id: 1,
      movieTitle: '올드보이',
      movieDate: '22/8/14',
      movieImage:
        'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
      likeCount: '2',
    },
    {
      id: 2,
      movieTitle: '올드보이',
      movieDate: '22/8/14',
      movieImage:
        'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
      likeCount: '2',
    },
    {
      id: 3,
      movieTitle: '올드보이',
      movieDate: '22/8/14',
      movieImage:
        'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
      likeCount: '2',
    },
    {
      id: 4,
      movieTitle: '올드보이',
      movieDate: '22/8/14',
      movieImage:
        'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
      likeCount: '2',
    },
    {
      id: 5,
      movieTitle: '올드보이',
      movieDate: '22/8/14',
      movieImage:
        'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
      likeCount: '2',
    },
  ]);

  return (
    <MainWrap>
      <MainHeader />

      <MainNav>배성열</MainNav>

      <MainListContainer>
        {movieList.map((item, index) => {
          return (
            <MainList
              key={item.id}
              movieList={item}
              setMovieList={setMovieList}
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
const MainUl = styled.ul`
  overflow: hidden;
  margin: 15px -42px -30px 1px;
  list-style: none;
  text-align: left;
`;
const MainLi = styled.li`
  float: left;
  width: 120px;
  height: 183px;
  margin: 0 21px 27px 0;
`;
export default Main;
