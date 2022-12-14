import React from 'react';
import styled from 'styled-components';
import HeartLike from './HeartLike';
import { useNavigate } from 'react-router-dom';

const MainList = ({ movieList }) => {
  const navigate = useNavigate();
  const title = movieList.movieTitle;
  const lengthOverCut = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength - 1) + '...' : str;
  };

  return (
    <ListWrap onClick={() => navigate(`/detail/${movieList.id}`)}>
      <ListMovieImageBox>
        <ListMovieImage src={movieList.img} alt="profile" />
      </ListMovieImageBox>
      <ListContents>
        <ListDate>{movieList.movieOpenDate}</ListDate>

        <ListContentsHead>
          <h3>{lengthOverCut(title, 8)}</h3>
          <ListContentLike>
            {/* 하트 카운트 */}
            <HeartLike count={movieList.movieRate} />
            {/* 하트 카운트 숫자 */}
            <p> {movieList.movieRate}</p>
          </ListContentLike>
        </ListContentsHead>
      </ListContents>
    </ListWrap>
  );
};

const ListWrap = styled.div`
  flex-direction: column;
  margin: 15px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 2px solid black;
  /* box-shadow: 5px 5px 0px #000; */
  background-color: #fff;
  height: 420px;
  min-width: 240px;
  padding: 5px 0px 5px 0px;
  /* background-color: yellow; */
`;
const ListMovieImageBox = styled.div`
  /* width: 30vh;
  height: 40vh; */
  /* margin: 2vh; */
  /* margin: 2vh 2vh 0vh 2vh; //픽셀로 변경하기 마진패딩 */
`;

const ListMovieImage = styled.img`
  width: 100%;
  max-width: 210px;
  height: 100%;
  max-height: 300px;
  margin: 12px auto; //한빛님이 알려주신 방법 rem이 브라우저마다 다르게나오는거. 상대적인크기. px과 혼용x
  //rem은 폰트에 많이씀. 이건 혼용해도됨.

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid black;
  /* width: 216px;
  height: 280px; */
`;

const ListContents = styled.div`
  justify-content: center;
  align-items: center;
  margin: 5px 5px 5px 14px;
  padding: 2px;
  width: 220px;
  /* padding: 4px; */
  /* background-color: orange; */
`;

const ListDate = styled.div`
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 208px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid lightsalmon;

  padding: 2px 0px 2px 8px;
  margin: 3px 0px 0px 1px;
  /* background-color: skyblue; */
`;

const ListContentsHead = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 50px;
  width: 215px;
  overflow: hidden;
  /* background-color: green; */

  h3 {
    width: 160px;
    max-width: 160px;
    max-height: 60px;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.5px;
    margin: 13px 2px 1px 3px;
    /* text-overflow: ellipsis; */
    /* background-color: white; */
  }
  p {
    align-items: center;
    font-size: 18px;
    /* background-color: gray; */
  }
`;

const ListContentLike = styled.div`
  align-items: center;
  display: flex;
  min-height: 50px;
  min-width: 50px;

  padding: 2px 0px 0px 0px;
  /* background-color: pink; */
`;

export default MainList;
