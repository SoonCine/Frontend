import styled from 'styled-components';
import '../../static//fonts/fonts.css';

export const WholeDetail = styled.div`
  /* width: 700px;
  height: 500px;
  padding: 30px;
  border: 1px solid black;
  margin: 20px;
  justify-content: center; */
  /* background-color: lightgray; */
  /* width: 1000px; */
  background-image: url('https://i.pinimg.com/564x/14/4b/a9/144ba9c008b781d52fb03f4ef05ba441.jpg');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  height: 100vh;
`;

export const ImageNinfo = styled.div`
  width: 550px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: rgb(252, 249, 242); */
  background-image: url('https://i.pinimg.com/564x/4c/d3/02/4cd302d1c2d1211f07c168d01f77dbaa.jpg');
  background-position: 10%;
`;

export const ImageBox = styled.div`
  width: 154px;
  height: 220px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0px 20px 0px 0px;
`;

export const MovieImage = styled.img`
  width: 154px;
  height: 220px;
  border-radius: 10px;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
`;

export const MovieInfo = styled.div`
  width: 330px;
  height: 220px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px 0px 20px 0px;
  background-color: rgb(252, 249, 242);
`;

export const MovieTitle = styled.p`
  margin: 10px 10px 0px 10px;
  font-size: 30px;
`;

export const MovieAge = styled.p`
  margin: 10px;
  font-size: 14px;
`;

export const MovieReleaseDate = styled.p`
  margin: 10px;
  font-size: 20px;
`;

export const Likes = styled.button`
  cursor: pointer;
  margin: 0px 0px 0px 10px;
  color: crimson;
`;

export const CommentBox = styled.div`
  width: 550px;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  /* background-color: rgb(252, 249, 242); */
  background-image: url('https://i.pinimg.com/564x/4c/d3/02/4cd302d1c2d1211f07c168d01f77dbaa.jpg');
`;

export const CommentNbutton = styled.div`
  margin: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const InputComment = styled.input`
  width: 445px;
  height: 35px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const SaveButton = styled.button`
  height: 40px;
  width: 48px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 0 0 20px;
  cursor: pointer;
`;

export const CommentList = styled.div``;

export const IndivComment = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 14px 20px 20px 20px;
  display: flex;
  flex-direction: row;
  background-color: rgb(252, 249, 242);
`;

export const CommentNickname = styled.p`
  text-align: center;
  width: 120px;
  height: 35px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 15px;
`;

export const CommentContent = styled.p`
  padding-left: 12px;
  width: 300px;
  height: 35px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 15px 0px 15px 0px;
`;

export const CommentEditInput = styled.input`
  padding-left: 12px;
  width: 300px;
  height: 35px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 15px 0px 15px 0px;
`;

export const DeleteButton = styled.button`
  border: 1px solid black;
  border-radius: 15%;
  margin: 20px;
  background-color: transparent;
  cursor: pointer;
  width: 32px;
  height: 22px;
`;

export const CommentDiv = styled.div``;
export const CommentArea = styled.div`
  width: 520px;
  height: 30px;
  border: 1px solid black;
  margin-left: 20px;
  display: flex;
`;

export const NicknameArea = styled.div`
  width: 120px;
  margin-top: 4.5px;
`;

export const ContentArea = styled.div`
  width: 340px;
  margin-top: 4.5px;
  margin-left: 20px;
`;

export const ScrollDiv = styled.div`
  height: 300px;
  overflow: scroll;
`;
