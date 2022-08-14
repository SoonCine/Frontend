import styled from 'styled-components';
import '../../static//fonts/fonts.css';

export const WholeDetail = styled.div`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 700px;
  height: 500px;
  padding: 30px;
  border: 1px solid black;
  margin: 20px;
  justify-content: center; */
  background-color: gray;
  /* width: 1000px;
  height: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
export const ImageNinfo = styled.div`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: upper;
`;
export const ImageBox = styled.div`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  width: 160px;
  height: 210px;
  border: 1px solid black;
  margin: 20px;
`;
export const MovieImage = styled.img`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  width: 100px;
  height: 130px;
  padding: 50px 20%;
  /* box-sizing: border-box; */
`;
export const MovieInfo = styled.div`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 150px;
  height: 210px; */
  border: 1px solid black;
  margin: 20px 20px 20px 0px;
`;
export const MovieEngtitle = styled.p`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
`;
export const MovieTitle = styled.p`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
`;
export const MovieGenre = styled.p`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
`;
export const Likes = styled.button`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
  cursor: pointer;
`;
export const CommentBox = styled.div`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 500px;
  height: 100px; */
  border: 1px solid black;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;
export const CommentNbutton = styled.div`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
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
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
`;
export const SaveButton = styled.button`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
  margin: 0 0 0 20px;
  cursor: pointer;
`;
export const CommentList = styled.div`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px; */
  background-color: orange;
`;
export const IndivComment = styled.div`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 100px;
  height: 100px; */
  border: 1px solid black;
  margin: 20px;
  display: flex;
  flex-direction: row;
  background-color: lightpink;
`;
export const CommentNickname = styled.p`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 100px;
  height: 20px; */
  border: 1px solid black;
  margin: 20px;
`;
export const CommentContent = styled.p`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  /* width: 300px;
  height: 20px; */
  border: 1px solid black;
  margin: 20px;
`;
export const DeleteButton = styled.button`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  border: 1px solid black;
  border-radius: 15%;
  margin: 20px;
  background-color: transparent;
  cursor: pointer;
`;
