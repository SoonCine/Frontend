import React from 'react';
import styled from 'styled-components';

const MainList = ({ movieList, setMovieList }) => {
  return (
    <div>
      <img src={movieList.movieImage} alt="profile" />
      <div>
        <span>{movieList.title}</span>
        <div>{movieList.likeCount}</div>
      </div>
      <div>{movieList.movieDate}</div>
    </div>
  );
};

export default MainList;
