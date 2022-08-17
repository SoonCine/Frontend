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
  background-image: url("https://i.pinimg.com/564x/14/4b/a9/144ba9c008b781d52fb03f4ef05ba441.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
export const ImageNinfo = styled.div`
  width: 560px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  margin: 10px 10px 0px 10px;
  font-size: 30px;
`;
export const MovieEngtitle = styled.p`
  margin: 0px 0px 0px 10px;
  font-size: 13px;
`;
export const MovieGenre = styled.p`
  margin: 10px;
  font-size: 20px;
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
  width: 560px;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px;
  justify-content: center;
  align-items: center;
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
`;
export const SaveButton = styled.button`
  height: 40px;
  width: 48px;
  margin: 0 0 0 20px;
  cursor: pointer;
`;
export const CommentList = styled.div``;
export const IndivComment = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  flex-direction: row;
`;
export const CommentNickname = styled.p`
  text-align: center;
  width: 120px;
  height: 30px;
  border: 1px solid black;
  margin: 15px;
  padding-top: 5px;
`;
export const CommentContent = styled.p`
  padding-left: 12px;
  padding-top: 5px;
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

export const CommentDeleteButton = styled.button`
  border-radius: 15%;
  background-color: transparent;
  cursor: pointer;
  border: none;
  width: 32px;
  height: 22px;
  margin-top: 5px;
`;
export const ScrollDiv = styled.div`
  height: 300px;
  overflow: scroll;
`;
{
  /* <CommentDiv>
<CommentArea>
<NicknameArea>
  덕구아빠
</NicknameArea>

<ContentArea>
  내용입니다
</ContentArea>

<CommentDeleteButton>🗑️</CommentDeleteButton>
</CommentArea>
</CommentDiv> */
}
