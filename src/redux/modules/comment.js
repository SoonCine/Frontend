import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { deleteCommentList } from './comment';

const url_post = process.env.REACT_APP_URL + `/api/post/movieupcomming/`;
const url_post_post = process.env.REACT_APP_URL + `/api/auth/movieupcomming/`;
const initialState = {
  commentList: [],
};

export const commentList = createAsyncThunk(
  'getCommentList',
  async (payload, thunkAPI) => {
    // payload = id
    try {
      const response = await axios.get(url_post + `${payload}`);
      // console.log('111111', data.data.data.commentResponseDtoList);
      return thunkAPI.fulfillWithValue(
        response.data.data.commentResponseDtoList
      );
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
    // console.log(thunkAPI.fulfillWithValue);
  }
);

export const addCommentList = createAsyncThunk(
  'addCommentList',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${url_post_post}comment`, payload);

      return console.log('-----ㅗㅗㅗㅗ----', response);
      // return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const _deleteCommentList = createAsyncThunk(
  'deleteCommentList',
  async (payload, thunkAPI) => {
    try {
      // console.log('axios', payload);
      const data = await axios.delete(url_post, payload);
      // return thunkAPI.fulfillWithValue();
      return console.log('11111111111', data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editCommentList = createAsyncThunk(
  'editCommentList',
  async (payload, thunkAPI) => {
    try {
      // console.log('axios', payload);
      const data = await axios.post(url_post, payload);
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: {
    [commentList.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.commentList = action.payload;
    },
    [commentList.rejected]: (state, action) => {
      // console.log(action);
    },

    [addCommentList.fulfilled]: (state, action) => {
      // state.addCommentList =
    },
    [addCommentList.rejected]: (state, action) => {
      // state.addCommentList =
    },
  },
});

// export const { userSlice } = userSlice.actions;
export default commentSlice.reducer;
