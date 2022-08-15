import React from 'react';
import { useState } from 'react';
import MainHeader from './MainHeader';
import MainList from './MainList';
import styled from 'styled-components';

const Main = () => {
  const [movieList, setMovieList] = useState([
    {
      id: 0,
      movieTitle: '화양연화',
      movieDate: '22/8/14',
      movieImage: 'http://img.movist.com/?img=/x00/00/05/17_p1.jpg',
      likeCount: '2',
    },
    {
      id: 1,
      movieTitle: '라라랜드',
      movieDate: '22/8/14',
      movieImage:
        'https://mblogthumb-phinf.pstatic.net/MjAxOTAxMTJfMzMg/MDAxNTQ3MjczNjczMjc1.8m8t9fNnOr87ggvT00zTmlbACX6EmnmU_kw_lr9pj5Yg.ZTqgm4WTeWyTNDKCECB7dW2zao5QjPX0GFpTcpmCYMEg.JPEG.mchumini/FMV-308.jpg?type=w800',
      likeCount: '100',
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
