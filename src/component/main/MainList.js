import React from 'react';
import styled from 'styled-components';
import HeartLike from './HeartLike';

const MainList = ({ movieList }) => {
  // const navigate = useNavigate();

  const title = movieList.movieTitle;

  const lengthOverCut = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength - 1) + '...' : str;
  };

  return (
    <ListWrap>
      <ListMovieImageBox>
        <ListMovieImage src={movieList.img} alt="profile" />
      </ListMovieImageBox>
      <ListContents>
        <ListDate>{movieList.movieOpenDate}</ListDate>

        <ListContentsHead>
          <h3>{lengthOverCut(title, 8)}</h3>
          <ListContentLike>
            {/* 하트 카운트 */}
            <HeartLike count={movieList.likeCount} />
            {/* 하트 카운트 숫자 */}
            <p> {movieList.like}</p>
          </ListContentLike>
        </ListContentsHead>
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
  max-height: 500px;
  min-width: 250px;
`;
const ListMovieImageBox = styled.div`
  width: 30vh;
  height: 40vh;
  margin: 2vh;
`;

const ListMovieImage = styled.img`
  width: 100%;
  height: 100%;
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

const ListDate = styled.div`
  align-items: center;
  justify-content: center;
  font-size: 13px;
`;

const ListContentsHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  overflow: hidden;

  h3 {
    max-width: 150px;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 2px;
  }
  p {
    align-items: center;
    font-size: 15px;
  }
`;

const ListContentLike = styled.div`
  align-items: center;
  display: flex;
`;

export default MainList;
