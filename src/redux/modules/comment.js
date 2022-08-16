import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url_post = process.env.REACT_APP_URL + `/api/post/movieupcomming/`;

const initialState = {
  commentList: [],
};

export const commentList = createAsyncThunk(
  'getCommentList',
  async (payload, thunkAPI) => {
    // payload = id
    try {
      const data = await axios.get(url_post + `${payload}`);
      return thunkAPI.fulfillWithValue(data.data.data.commentResponseDtoList);
      // return console.log(data.data.data.commentResponseDtoList);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
    // console.log(thunkAPI.fulfillWithValue);
  }
);

export const addCommentThunk = createAsyncThunk(
  'addCommentThunk',
  async (payload,thunkAPI) => {
    const data = await axios.post(url_post,payload).then((res)=>console.log(res))
  }
)

export const deleteCommentThunk = createAsyncThunk(
  'comment/deleteComment',
  async (payload, thunkAPI) => {
    await axios
      .delete(`${URL}/comment/${payload}`)
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return payload;
  }
);

const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [commentList.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.commentList = action.payload;
    },
    [commentList.rejected]: (state, action) => {
      // console.log(action);
    },
    [deleteCommentThunk.fulfilled]: (state, action) => {

    }
  },
});

// export const { userSlice } = userSlice.actions;
export default commentSlice.reducer;
