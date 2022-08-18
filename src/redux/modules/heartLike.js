import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const heartLike = createAsyncThunk('like', async (payload, thunkAPI) => {
  try {
    const data = await axios.get(url_post);

    return thunkAPI.fulfillWithValue(data.data.data);
    // data.data.data 가 payload
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
  // console.log(thunkAPI.fulfillWithValue);
});
