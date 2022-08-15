import React from 'react';
import { useState } from 'react';
//styled import
import {
  WholeDetail,
  ImageNinfo,
  ImageBox,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieEngtitle,
  MovieGenre,
  MovieReleaseDate,
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
} from './DetailStyled';

function Detail() {
  //comment값에 글의 param값 나중에 추가하기

  return (
    <WholeDetail>
      <ImageNinfo>
        <ImageBox>
          <MovieImage src="https://mblogthumb-phinf.pstatic.net/MjAxOTAxMTJfMzMg/MDAxNTQ3MjczNjczMjc1.8m8t9fNnOr87ggvT00zTmlbACX6EmnmU_kw_lr9pj5Yg.ZTqgm4WTeWyTNDKCECB7dW2zao5QjPX0GFpTcpmCYMEg.JPEG.mchumini/FMV-308.jpg?type=w800" />
        </ImageBox>
        <MovieInfo>
          <MovieTitle>영화 제목</MovieTitle>
          <MovieEngtitle>영어 제목</MovieEngtitle>
          <hr></hr>
          <MovieGenre>장르</MovieGenre>
          <MovieReleaseDate>개봉일</MovieReleaseDate>
          <Likes> ❤️ Likes </Likes>
        </MovieInfo>
      </ImageNinfo>
      <CommentBox>
        <CommentNbutton>
          <InputComment
            type="text"
            placeholder="댓글을 입력해 주세요."></InputComment>
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
