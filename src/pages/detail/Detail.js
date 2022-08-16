import React from 'react';
import { useState } from 'react';
import useInput from '../../hook/hook';
import { addCommentThunk } from '../../redux/modules/comment';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comment from '../../component/comment/comment'

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
  ScrollDiv,
} from './DetailStyled';

function Detail() {
  const dispatch = useDispatch();
  const [comment, setComment] = useInput('');

  const param = useParams();
  const taken_comment = useSelector((state) => state.comment.comment);

  // const comment_data = {
  //   comment: comment,
  //   movie_num: param,
  // nickname : 토큰속 닉네임
  // };
  console.log(taken_comment);
  // console.log(comment)
  const addComment = () => {
    dispatch(addCommentThunk(comment));
  };

  // comment값에 글의 param값 나중에 추가하기
  // comment값이 서버

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
            placeholder="댓글을 입력해 주세요."
            onChange={setComment}></InputComment>
          <SaveButton onClick={addComment}>등록</SaveButton>
        </CommentNbutton>
        <hr></hr>
        <ScrollDiv>
          {taken_comment.map((item, i) => (
            <Comment comment={item} key={i} />
          ))}
        </ScrollDiv>
      </CommentBox>
    </WholeDetail>
  );
}

export default Detail;
