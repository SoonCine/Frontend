import React from 'react';
import styled from 'styled-components';
import { HeartFilled } from '@ant-design/icons';

const MainList = ({ movieList, setMovieList }) => {
  return (
    <ListLiWrap>
      <ListMovieImageBox>
        <ListMovieImage src={movieList.movieImage} alt="profile" />
      </ListMovieImageBox>
      <ListContents>
        <ListContentsHead>
          <h3>{movieList.movieTitle}</h3>

          <div>
            <HeartFilled />
          </div>
          <p> {movieList.likeCount}</p>
        </ListContentsHead>
        <span>{movieList.movieDate}</span>
      </ListContents>
    </ListLiWrap>
  );
};

const ListLiWrap = styled.div`
  flex-direction: column;
  margin: 10px;
  box-sizing: border-box;
  border-radius: 25px;
  box-shadow: 5px 5px 0px #000;
  background-color: #fff;
  border: 2px solid yellow;
`;
const ListMovieImageBox = styled.div`
  width: 160px;
  height: 210px;
  border: 1px solid black;
  margin: 20px;
`;

const ListMovieImage = styled.img`
  width: 160px;
  height: 210px;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
`;

const ListContents = styled.div`
  justify-content: center;

  align-items: center;
  margin: 10px 10px;
  padding: 0px 20px;

  border: 2px solid black;
`;

const ListContentsHead = styled.div`
  display: flex;
  justify-content: space-between;
`;
/* h3 {
    margin: 0px;
    font-weight: 500;
    font-size: 22px;
    letter-spacing: 2px;
    border: 2px solid black;
  }

  p {
    margin-top: 2px;
    font-size: 16px;
    border: 2px solid black;
  }

  span {
    display: flex;
    align-items: center;
    margin: 30px 0px;
    gap: 5px;
    font-size: 16px;
    border: 2px solid black;
  } */

export default MainList;
