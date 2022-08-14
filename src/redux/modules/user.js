import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const checkEmailThunk = createAsyncThunk(
  'user/checkEmailThunk',
  async (payload, thunkAPI) => {
console('check')

    return thunkAPI.fulfillWithValue();
    // return {msg : true};
  }
);

const userSlice = createSlice({
  name: 'name',
  initialState: initialState,
  reducers: {},
});

// export const { userSlice } = userSlice.actions;
export default userSlice.reducer;
