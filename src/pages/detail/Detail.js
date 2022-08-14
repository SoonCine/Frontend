import React from "react";
import {
  WholeDetail,
  ImageNinfo,
  ImageBox,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieEngtitle,
  MovieGenre,
  Likes,
  CommentBox,
  CommentNbutton,
  InputComment,
  SaveButton,
  CommentList,
  IndivComment,
  CommentNickname,
  CommentContent,
  DeleteButton,
} from "./DetailStyled";

function Detail() {
  return (
    <WholeDetail>
      <ImageNinfo>
        <ImageBox>
          이미지 들어갈 자리
          <MovieImage src="https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg" />
        </ImageBox>
        <MovieInfo>
          <MovieTitle>영화 제목</MovieTitle>
          <MovieEngtitle>영어 제목</MovieEngtitle>
          <MovieGenre>장르</MovieGenre>
          <Likes> ♥ </Likes>
        </MovieInfo>
      </ImageNinfo>
      <CommentBox>
        <CommentNbutton>
          <InputComment
            type="text"
            placeholder="댓글을 입력해 주세요."
          ></InputComment>
          <SaveButton>등록</SaveButton>
        </CommentNbutton>
        <hr></hr>
        <div>
          <CommentList>
            <IndivComment>
              <CommentNickname> 닉네임 </CommentNickname>
              <CommentContent> 댓글 내용 </CommentContent>
              <DeleteButton>🗑️</DeleteButton>
            </IndivComment>
          </CommentList>
        </div>
      </CommentBox>
    </WholeDetail>
  );
}

export default Detail;
