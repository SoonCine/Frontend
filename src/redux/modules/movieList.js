import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  movieList: [
    {
      id: 0,
      movieTitle: '화양연화',
      movieDate: '22/8/14',
      movieImage: 'http://img.movist.com/?img=/x00/00/05/17_p1.jpg',
      likeCount: '0',
    },
    {
      id: 1,
      movieTitle: '라라랜드',
      movieDate: '22/8/14',
      movieImage:
        'https://mblogthumb-phinf.pstatic.net/MjAxOTAxMTJfMzMg/MDAxNTQ3MjczNjczMjc1.8m8t9fNnOr87ggvT00zTmlbACX6EmnmU_kw_lr9pj5Yg.ZTqgm4WTeWyTNDKCECB7dW2zao5QjPX0GFpTcpmCYMEg.JPEG.mchumini/FMV-308.jpg?type=w800',
      likeCount: '100',
    },
    {
      id: 2,
      movieTitle: '올드보이',
      movieDate: '22/8/14',
      movieImage:
        'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
      likeCount: '0',
    },
    {
      id: 3,
      movieTitle: '올드보이',
      movieDate: '22/8/14',
      movieImage:
        'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
      likeCount: '2',
    },
    {
      id: 4,
      movieTitle: '올드보이',
      movieDate: '22/8/14',
      movieImage:
        'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
      likeCount: '2',
    },
    {
      id: 5,
      movieTitle: '올드보이',
      movieDate: '22/8/14',
      movieImage:
        'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
      likeCount: '2',
    },
  ],
};

export const movieSlice = createSlice({
  name: 'movieList',
  initialState,
  reducers: {},
});

export const getMovieListThunk = createAsyncThunk('getMovieList', async () => {
  const data = await axios.get('http://54.180.89.34:8080/api/movie/upcomming');

  console.log(data);
});

export const {} = movieSlice.actions;
export default movieSlice.reducer;
