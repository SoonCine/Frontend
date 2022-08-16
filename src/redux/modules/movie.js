import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const movieThunk = createAsyncThunk(
  'user/movieThunk',
  async (payload, thunkAPI) => {
    const List = await axios
      .get('http://54.180.89.34:8080/api/movie/upcomming')
      .then((res) => res.data.data);
    console.log(List);

    return thunkAPI.fulfillWithValue();
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState: initialState,
  reducers: {},
});

export default movieSlice.reducer;
