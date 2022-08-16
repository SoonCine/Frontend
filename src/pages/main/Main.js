import React from 'react';
import MainHeader from '../../component/main/MainHeader';
import MainList from '../../component/main/MainList';
import MainNav from '../../component/main/MainNav';
import { MainWrap, MainListContainer } from './MainStyled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncGetMovieList } from '../../redux/modules/movieList';

const Main = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList.movieList);

  console.log(movieList);

  useEffect(() => {
    dispatch(asyncGetMovieList());
  }, []);

  return (
    <MainWrap>
      <MainHeader />
      <MainNav />
      <MainListContainer onclick={() => {}}>
        {movieList.map((item, index) => {
          return (
            <MainList key={`${index}_${index.movieTitle}`} movieList={item} />
          );
        })}
      </MainListContainer>
    </MainWrap>
  );
};

export default Main;
