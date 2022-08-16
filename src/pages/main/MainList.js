import React from "react";
import styled from "styled-components";
import HeartLike from "./HeartLike";

const MainList = ({ movieList }) => {
  // const navigate = useNavigate();
  return (
    <ListWrap>
      <ListMovieImageBox>
        <ListMovieImage src={movieList.img} alt="profile" />
      </ListMovieImageBox>
      <ListContents>
        <ListDate>{movieList.movieOpenDate}</ListDate>

        <ListContentsHead>
          <h3>{movieList.movieTitle}</h3>
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
  margin: 15px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 2px solid black;
  /* box-shadow: 5px 5px 0px #000; */
  background-color: #fff;
  min-height: 408px;
  min-width: 240px;
  padding: 5px 0px 5px 0px;
  /* background-color: yellow; */
`;
const ListMovieImageBox = styled.div`
  width: 30vh;
  height: 40vh;
  /* margin: 2vh; */
  margin: 2vh 2vh 0vh 2vh;
`;

const ListMovieImage = styled.img`
  /* width: 100%;
  height: 100%; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid black;
  width: 216px;
  height: 280px;
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
  width: 215px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid lightsalmon;
  padding: 2px 0px 2px 6px;

  /* background-color: skyblue; */
`;

const ListContentsHead = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 60px;
  width: 215px;
  overflow: hidden;
  /* background-color: green; */

  h3 {
    max-width: 160px;
    max-height: 60px;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.5px;
    margin: 8px 2px 1px 0px;
    /* text-overflow: ellipsis; */
    /* background-color: white; */
  }
  p {
    align-items: center;
    font-size: 16px;
    /* background-color: gray; */
  }
`;

const ListContentLike = styled.div`
  align-items: center;
  display: flex;
  min-height: 60px;
  min-width: 60px;
  /* background-color: pink; */
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
