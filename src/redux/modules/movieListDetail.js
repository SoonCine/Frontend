import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../token/instance/instance';

const initialState = {
  movieListDetail: {},
};

export const asyncGetMovieListDetail = createAsyncThunk(
  'getMovieList_',
  // 이거 이름 겹치면 안됨!!
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/api/post/movieupcomming/${payload}`);
      return thunkAPI.fulfillWithValue(data.data.data);
      // data.data.data 가 payload
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const movieDetailSlice = createSlice({
  name: 'movieListDetail',
  initialState,
  reducers: {},
  extraReducers: {
    [asyncGetMovieListDetail.fulfilled]: (state, action) => {
      state.movieListDetail = action.payload;
    },
    [asyncGetMovieListDetail.rejected]: (state, action) => {},
  },
});

export default movieDetailSlice.reducer;
