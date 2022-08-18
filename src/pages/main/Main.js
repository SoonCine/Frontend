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
  const _movieList = useSelector((state) => state.movieList.movieList);

  // console.log(_movieList);

  useEffect(() => {
    dispatch(asyncGetMovieList());
  }, [dispatch]);

  if (_movieList.length == 0) {
    return <></>;
  } else {
    return (
      <MainWrap>
        <MainHeader />
        <MainNav />
        <MainListContainer>
          {_movieList?.map((item) => {
            return <MainList key={item.id} movieList={item} />;
          })}
        </MainListContainer>
      </MainWrap>
    );
  }
};

export default Main;
