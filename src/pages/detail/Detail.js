import React from 'react';
import { useState, useEffect } from 'react';
import useInput from '../../hook/hook';
import { addCommentThunk } from '../../redux/modules/comment';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { commentList } from '../../redux/modules/comment';
import { asyncGetMovieListDetail } from '../../redux/modules/movieListDetail';
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

import Comment from '../../component/comment/Comment';

function Detail() {
  const dispatch = useDispatch();
  const [inputComment, setInputComment] = useInput('');

  useEffect(() => {
    dispatch(asyncGetMovieListDetail(id));
  }, []);

  useEffect(() => {
    dispatch(commentList(id));
  }, []);

  const { id } = useParams();
  const movie = useSelector((state) => state.movieListDetail.movieListDetail);
  const comments = useSelector((state) => state.comment.commentList);

  return (
    <WholeDetail>
      <ImageNinfo>
        <ImageBox>
          <MovieImage src={movie.img} />
        </ImageBox>
        <MovieInfo>
          <MovieTitle>{movie.movieTitle}</MovieTitle>
          <hr></hr>
          <MovieGenre>{movie.movieAge}</MovieGenre>
          <MovieReleaseDate>{movie.movieOpenDate}</MovieReleaseDate>
          <Likes> {movie.Likes}</Likes>
        </MovieInfo>
      </ImageNinfo>
      <CommentBox>
        <CommentNbutton>
          <InputComment
            type="text"
            placeholder="댓글을 입력해 주세요."
            onChange={setInputComment}></InputComment>
          <SaveButton>등록</SaveButton>
        </CommentNbutton>
        <hr></hr>
        <ScrollDiv>
          {comments.map((item, i) => (
            <Comment comment={item} key={i} />
          ))}
        </ScrollDiv>
      </CommentBox>
    </WholeDetail>
  );
}

export default Detail;
