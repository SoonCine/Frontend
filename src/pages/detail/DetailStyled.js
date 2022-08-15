import styled from "styled-components";
import "../../static//fonts/fonts.css";

export const WholeDetail = styled.div`
  /* width: 700px;
  height: 500px;
  padding: 30px;
  border: 1px solid black;
  margin: 20px;
  justify-content: center; */
  background-color: lightgray;
  /* width: 1000px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
export const ImageNinfo = styled.div`
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
  /* background-color: lightblue; */
  width: 560px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* align-items: upper; */
`;
export const ImageBox = styled.div`
  width: 160px;
  height: 210px;
  border: 1px solid black;
  margin: 20px;
`;
export const MovieImage = styled.img`
  width: 160px;
  height: 210px;
  /* padding: 10px 3%; */
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
`;
export const MovieInfo = styled.div`
  width: 330px;
  height: 220px;
  border: 1px solid black;
  margin: 20px 20px 20px 0px;
`;
export const MovieTitle = styled.p`
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
  margin: 10px 10px 0px 10px;
  font-size: 30px;
`;
export const MovieEngtitle = styled.p`
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
  margin: 0px 0px 0px 10px;
  font-size: 13px;
`;
export const MovieGenre = styled.p`
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
  margin: 10px;
  font-size: 20px;
`;
export const MovieReleaseDate = styled.p`
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
  margin: 10px;
  font-size: 20px;
`;
export const Likes = styled.button`
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
  cursor: pointer;
  margin: 0px 0px 0px 10px;
  color: crimson;
`;
export const CommentBox = styled.div`
  /* width: 500px;
  height: 100px; */
  width: 560px;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;
export const CommentNbutton = styled.div`
  /* width: 500px;
  height: 100px;
  border: 1px solid black; */
  margin: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
export const InputComment = styled.input`
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
  width: 445px;
  height: 35px;
`;
export const SaveButton = styled.button`
  height: 40px;
  width: 48px;
  margin: 0 0 0 20px;
  cursor: pointer;
`;
export const CommentList = styled.div`
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
  background-color: orange;
`;
export const IndivComment = styled.div`
  /* width: 100px;
  height: 100px; */
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  background-color: lightpink;
`;
export const CommentNickname = styled.p`
  /* width: 100px;
  height: 20px; */
  width: 120px;
  height: 30px;
  border: 1px solid black;
  margin: 15px;
`;
export const CommentContent = styled.p`
  width: 300px;
  height: 30px;
  border: 1px solid black;
  margin: 15px 0px 15px 0px;
`;
export const DeleteButton = styled.button`
  border: 1px solid black;
  border-radius: 15%;
  margin: 20px;
  background-color: transparent;
  cursor: pointer;
`;
