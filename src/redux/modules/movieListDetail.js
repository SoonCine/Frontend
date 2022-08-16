import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url_post =
  process.env.REACT_APP_URL +
  `/api/post/movieupcomming
`;

const initialState = {
  movieListDetail: {},
};

export const asyncGetMovieListDetail = createAsyncThunk(
  'getMovieList_',
  // 이거 이름 겹치면 안됨!!
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(url_post + `/${payload}`);
      return thunkAPI.fulfillWithValue(data.data.data);
      // return console.log(data);
      // data.data.data 가 payload
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
    // console.log(thunkAPI.fulfillWithValue);
  }
);

export const movieDetailSlice = createSlice({
  name: 'movieListDetail',
  initialState,
  reducers: {},
  extraReducers: {
    [asyncGetMovieListDetail.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.movieListDetail = action.payload;
    },
    [asyncGetMovieListDetail.rejected]: (state, action) => {
      // console.log(action);
    },
  },
});

export default movieDetailSlice.reducer;
