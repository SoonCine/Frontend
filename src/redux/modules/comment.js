import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { deleteCommentList } from './comment';
import instance from '../../token/instance/instance';

const url_post = `/api/post/movieupcomming/`;
const url_post_post = `/api/auth/movieupcomming/`;
const initialState = {
  commentList: [],
};

export const commentList = createAsyncThunk(
  'getCommentList',
  async (payload, thunkAPI) => {
    // payload = id
    try {
      const response = await instance.get(url_post + `${payload}`);

      // console.log('111111', response.data.data.commentResponseDtoList);

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
      const response = await instance.post(`${url_post_post}comment`, payload);
      // return console.log(response.data.data);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// /api/auth/movieupcomming/comment/{id}

export const _deleteCommentList = createAsyncThunk(
  '_deleteCommentList',
  async (payload, thunkAPI) => {
    try {
      // console.log('axios', payload);
      const response = await instance.delete(
        `${url_post_post}comment/${payload}`
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// /api/auth/movieupcomming/comment/{comment_id}
export const editCommentList = createAsyncThunk(
  'editCommentList',
  async (payload, thunkAPI) => {
    try {
      // console.log('axios', payload);
      const response = await instance.put(
        `${url_post_post}comment/${payload.postId}`,
        { postId: payload.postId, content: payload.content }
      );
      return thunkAPI.fulfillWithValue(payload);
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
      console.log(action);
    },

    [addCommentList.fulfilled]: (state, action) => {
      state.commentList = [...state.commentList, action.payload];
    },
    [addCommentList.rejected]: (state, action) => {
      console.log(action);
    },
    [_deleteCommentList.fulfilled]: (state, action) => {
      state.commentList = state.commentList.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [_deleteCommentList.rejected]: (state, action) => {
      console.log(action);
    },
    [editCommentList.fulfilled]: (state, action) => {
      state.commentList = state.commentList.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [editCommentList.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

// export const { userSlice } = userSlice.actions;
export default commentSlice.reducer;
