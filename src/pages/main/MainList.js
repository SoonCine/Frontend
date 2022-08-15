import React from 'react';
import styled from 'styled-components';
import HeartLike from './HeartLike';

const MainList = ({ movieList, setMovieList }) => {
  return (
    <ListWrap>
      <ListMovieImageBox>
        <ListMovieImage src={movieList.movieImage} alt="profile" />
      </ListMovieImageBox>
      <ListContents>
        <ListContentsHead>
          <h3>{movieList.movieTitle}</h3>
          <ListContentLike>
            {/* 하트 카운트 */}
            <HeartLike count={movieList.likeCount} />
            {/* 하트 카운트 숫자 */}
            <p> {movieList.likeCount}</p>
          </ListContentLike>
        </ListContentsHead>

        <ListDate>개봉일:{movieList.movieDate}</ListDate>
      </ListContents>
    </ListWrap>
  );
};

const ListWrap = styled.div`
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
  padding: 10px;
`;

const ListContentsHead = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    margin: 0px;
    font-weight: 500;
    font-size: 22px;
    letter-spacing: 2px;
  }
  p {
    margin-top: 2px;
    font-size: 16px;
  }
`;

const ListContentLike = styled.div`
  display: flex;
`;

const ListDate = styled.div`
  align-items: center;
  justify-content: center;
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
