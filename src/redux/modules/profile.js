import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const ProfileThunk = createAsyncThunk(
  'user/checkEmailThunk',
  async (payload, thunkAPI) => {

    return thunkAPI.fulfillWithValue();
  }
);

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {},
  });
  
  // export const { userSlice } = userSlice.actions;
  export default profileSlice.reducer;
  