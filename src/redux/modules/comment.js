import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { comment: ['test'] };

export const addCommentThunk = createAsyncThunk(
  'user/commentThunk',
  async (payload, thunkAPI) => {
    // console.log(payload)
    const data = await axios.post();
    console.log(payload);

    return thunkAPI.fulfillWithValue(payload);
  }
);

const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCommentThunk.fulfilled, (state, action) => {
      state.comment = [...state.comment, action.payload];
    });
  },
});

// export const { userSlice } = userSlice.actions;
export default commentSlice.reducer;
