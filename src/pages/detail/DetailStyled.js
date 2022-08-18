import styled from "styled-components";
import "../../static//fonts/fonts.css";

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

export const TwoBox = styled.div`
  min-width: 850px;
  /* padding: 20px 15px; */
  /* background-color: yellow; */
`;

export const ImageNinfo = styled.div`
  width: 100%;
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
  width: 500px;
  height: 220px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px 0px 20px 0px;
  background-color: rgb(252, 249, 242);
`;

export const MovieTitle = styled.p`
  margin: 10px 10px 0px 20px;
  font-size: 24px;
`;

export const MovieAge = styled.p`
  margin: 10px 10px 10px 20px;
  font-size: 14px;
`;

export const MovieReleaseDate = styled.p`
  margin: 10px 10px 10px 20px;
  font-size: 18px;
`;

// export const Likes = styled.button`
//   cursor: pointer;
//   margin: 0px 0px 0px 10px;
//   height: 50px;
//   width: 70px;
//   /* color: crimson; */
// `;

export const HeartLike = styled.div`
  /* margin: 10px 10px 10px 20px; */
  background-color: black;
`;

export const CommentBox = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 15px 0px 0px 0px;
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
  width: 730px;
  height: 35px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const SaveButton = styled.button`
  height: 39px;
  width: 52px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 0 0 20px;
  cursor: pointer;
`;

export const CommentList = styled.div``;

export const IndivComment = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(252, 249, 242);
  /* background-color: gray; */
`;

export const NicknameArea = styled.div`
  /* width: 120px;
  margin-top: 4.5px;
  background-color: red; */
  /* text-align: left;
  width: 120px;
  height: 35px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 15px;
  background-color: yellow; */
`;

export const CommentArea = styled.div`
  /* width: 520px;
  height: 30px;
  border: 1px solid black;
  margin-left: 20px;
  display: flex;
  padding-left: 12px;
  width: 300px;
  height: 35px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 15px 0px 15px 0px;
  background-color: lightblue; */
`;

export const CommentWrap = styled.div`
  //닉네임이랑 댓글같이감싼것
  display: flex;
  align-items: center;
  width: 85%;
  padding: 10px;
`;

export const CommentNickname = styled.div`
  /* text-align: left;
  width: 120px;
  height: 35px;
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
  border-radius: 10px;
  margin: 15px;
  background-color: yellow; */
  border: 1px solid black;
  border-radius: 10px;
  font-size: 16px;
  height: 35px;
  width: 20%;
  line-height: 35px; // 줄 높이 정하는 속성. 나중에 찾아보기!
  padding-left: 10px;
  margin-right: 10px;
`;

export const CommentContent = styled.div`
  /* padding-left: 12px;
  width: 300px;
  height: 35px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 15px 0px 15px 0px;
  background-color: lightblue; */
  width: 80%;
  height: 35px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 10px;
  line-height: 35px;
  padding-left: 10px;
  display: flex;
`;

export const DRButtons = styled.div`
  width: 15%;
  /* background-color: pink; */
`;

export const DeleteButton = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px 10px 10px 0px;
  cursor: pointer;
  background-color: rgb(252, 249, 242);
  width: 50px;
  height: 35px;
`;

export const ReviseButton = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: rgb(252, 249, 242);
  cursor: pointer;
  width: 50px;
  height: 35px;
`;

export const CommentDiv = styled.div``;

export const ContentArea = styled.div`
  width: 340px;
  margin-top: 4.5px;
  margin-left: 20px;

`;

export const ScrollDiv = styled.div`
  height: 300px;
  padding: 0 20px;
  overflow: scroll;
`;
