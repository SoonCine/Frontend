import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCommentList, commentList } from '../../redux/modules/comment';
import { asyncGetMovieListDetail } from '../../redux/modules/movieListDetail';
import {
  WholeDetail,
  ImageNinfo,
  ImageBox,
  MovieImage,
  MovieInfo,
  MovieTitle,
  // MovieEngtitle,
  MovieReleaseDate,
  MovieAge,
  Likes,
  CommentBox,
  CommentNbutton,
  InputComment,
  SaveButton,
  ScrollDiv,
} from './DetailStyled';

import Comment from '../../component/comment/Comment';
import CommentForm from '../../component/comment/CommnetForm';
import HeartLike from '../../component/main/HeartLike';

function Detail() {
  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState('');

  useEffect(() => {
    dispatch(commentList(id));
  }, []);

  useEffect(() => {
    dispatch(asyncGetMovieListDetail(id));
  }, []);

  const { id } = useParams();
  const movie = useSelector((state) => state.movieListDetail.movieListDetail);
  const comments = useSelector((state) => state.comment.commentList);

  console.log('------------', movie);

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
          <Likes>
            <HeartLike />
          </Likes>
          <div>{movie.likes}</div>
        </MovieInfo>
      </ImageNinfo>

      <CommentBox>
        <CommentForm
          id={id}
          inputForm={inputForm}
          setInputForm={setInputForm}
        />

        <hr></hr>
        <ScrollDiv>
          {comments.map((item) => (
            <Comment
              comment={item}
              id={id}
              key={item.id}
              inputForm={inputForm}
              setInputForm={setInputForm}
            />
          ))}
        </ScrollDiv>
      </CommentBox>
    </WholeDetail>
  );
}

export default Detail;
