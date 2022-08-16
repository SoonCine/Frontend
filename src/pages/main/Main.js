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

  useEffect(() => {
    dispatch(asyncGetMovieList());
  }, []);

  // useEffect(() => {
  //   axios.get('http://54.180.89.34:8080/api/movie/upcomming').then((res) => {
  //     setList(res.data.data.slice(0,12));
  //   });
  // }, []);
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
