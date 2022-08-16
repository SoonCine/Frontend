import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url_post = process.env.REACT_APP_URL + `/api/movie/upcomming`;

const initialState = {
  // movieList: [
  //   {
  //     id: 0,
  //     movieTitle: '화양연화',
  //     movieDate: '22/8/14',
  //     movieImage: 'http://img.movist.com/?img=/x00/00/05/17_p1.jpg',
  //     likeCount: '0',
  //   },
  //   {
  //     id: 1,
  //     movieTitle: '라라랜드',
  //     movieDate: '22/8/14',
  //     movieImage:
  //       'https://mblogthumb-phinf.pstatic.net/MjAxOTAxMTJfMzMg/MDAxNTQ3MjczNjczMjc1.8m8t9fNnOr87ggvT00zTmlbACX6EmnmU_kw_lr9pj5Yg.ZTqgm4WTeWyTNDKCECB7dW2zao5QjPX0GFpTcpmCYMEg.JPEG.mchumini/FMV-308.jpg?type=w800',
  //     likeCount: '100',
  //   },
  //   {
  //     id: 2,
  //     movieTitle: '올드보이',
  //     movieDate: '22/8/14',
  //     movieImage:
  //       'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
  //     likeCount: '0',
  //   },
  //   {
  //     id: 3,
  //     movieTitle: '올드보이',
  //     movieDate: '22/8/14',
  //     movieImage:
  //       'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
  //     likeCount: '2',
  //   },
  //   {
  //     id: 4,
  //     movieTitle: '올드보이',
  //     movieDate: '22/8/14',
  //     movieImage:
  //       'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
  //     likeCount: '2',
  //   },
  //   {
  //     id: 5,
  //     movieTitle: '올드보이',
  //     movieDate: '22/8/14',
  //     movieImage:
  //       'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
  //     likeCount: '2',
  //   },
  // ],
  movieList: [],
};

export const asyncGetMovieList = createAsyncThunk(
  'getMovieList',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(url_post);
      return thunkAPI.fulfillWithValue(data.data.data);
      // data.data.data 가 payload
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
    // console.log(thunkAPI.fulfillWithValue);
  }
);

export const movieSlice = createSlice({
  name: 'movieList',
  initialState,
  reducers: {},
  extraReducers: {
    [asyncGetMovieList.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.movieList = action.payload;
    },
    [asyncGetMovieList.rejected]: (state, action) => {
      // console.log(action);
    },
  },
});

export const {} = movieSlice.actions;
export default movieSlice.reducer;
