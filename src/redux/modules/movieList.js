import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url_post = process.env.REACT_APP_URL + `/api/movie/upcomming`;

const initialState = {
  movieList: [],
};

export const asyncGetMovieList = createAsyncThunk(
  "getMovieList",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(url_post);
      console.log(data);

      return thunkAPI.fulfillWithValue(data.data.data);
      // data.data.data 가 payload
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
    // console.log(thunkAPI.fulfillWithValue);
  }
);

export const movieSlice = createSlice({
  name: "movieList",
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
