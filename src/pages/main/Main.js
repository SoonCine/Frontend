import React from 'react';
import { useState } from 'react';
import MainHeader from './MainHeader';

const Main = () => {
  const [movieList, setMovieList] = useState({
    movieTitle: '',
    movieDate: '',
  });
  return (
    <div>
      <MainHeader />

      <div>
        <img src="https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg" />
        <div>
          <span>제목</span>
          <div>하트</div>
        </div>
        <div>개봉날짜</div>
      </div>
    </div>
  );
};

export default Main;
