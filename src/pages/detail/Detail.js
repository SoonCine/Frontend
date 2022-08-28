import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCommentList, commentList } from '../../redux/modules/comment';
import { asyncGetMovieListDetail } from '../../redux/modules/movieListDetail';

import {
  WholeDetail,
  TwoBox,
  ImageNinfo,
  ImageBox,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieAge,
  MovieReleaseDate,
  CommentBox,
  ScrollDiv,
} from './DetailStyled';

import Comment from '../../component/comment/CommentReply';
import CommentForm from '../../component/comment/CommentForm';
import HeartLike from '../../component/main/HeartLike';
import MainNav from '../../component/main/MainNav';
import MainHeader from '../../component/main/MainHeader';

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
  return (
    <WholeDetail>
      <TwoBox>
        <MainNav />
        <ImageNinfo>
          <ImageBox>
            <MovieImage src={movie.img} />
          </ImageBox>
          <MovieInfo>
            <MovieTitle>{movie.movieTitle}</MovieTitle>
            <hr></hr>
            <MovieAge>{movie.movieAge}</MovieAge>
            <MovieReleaseDate>{movie.movieOpenDate}</MovieReleaseDate>
            <div style={{ display: 'flex', margin: '10px 10px 10px 16px' }}>
              <div>
                <HeartLike />
              </div>
              <div>{movie.movieRate}</div>
            </div>
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
      </TwoBox>
    </WholeDetail>
  );
}

export default Detail;
