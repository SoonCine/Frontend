import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { commentList } from "../../redux/modules/comment";
import { asyncGetMovieListDetail } from "../../redux/modules/movieListDetail";
import {
  WholeDetail,
  ImageNinfo,
  ImageBox,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieAge,
  MovieReleaseDate,
  Likes,
  CommentBox,
  ScrollDiv,
} from "./DetailStyled";

import Comment from '../../component/comment/Comment';
import CommentForm from '../../component/comment/CommnetForm';

function Detail() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetMovieListDetail(id));
  }, []);

  useEffect(() => {
    dispatch(commentList(id));
  });

  const { id } = useParams();
  const movie = useSelector((state) => state.movieListDetail.movieListDetail);
  const comments = useSelector((state) => state.comment.commentList);
  console.log("3333333", id);
  return (
    <WholeDetail>
      <ImageNinfo>
        <ImageBox>
          <MovieImage src={movie.img} />
        </ImageBox>
        <MovieInfo>
          <MovieTitle>{movie.movieTitle}</MovieTitle>
          <hr></hr>
          <MovieAge>{movie.movieAge}</MovieAge>
          <MovieReleaseDate>{movie.movieOpenDate}</MovieReleaseDate>
          <Likes> {movie.Likes}</Likes>
        </MovieInfo>
      </ImageNinfo>

      <CommentBox>
        <CommentForm id={id} />

        <hr></hr>
        <ScrollDiv>
          {comments.map((item) => (
            <Comment comment={item} key={item.id} />
          ))}
        </ScrollDiv>
      </CommentBox>
    </WholeDetail>
  );
}

export default Detail;
