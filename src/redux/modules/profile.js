import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import instance from '../../token/instance/instance';

const initialState = {profile :[]};

export const ProfileThunk = createAsyncThunk(
  'user/checkEmailThunk',
  async (payload, thunkAPI) => {
    const userList = await instance
    .post('/api/auth/member/profile')
    .then((res) =>res.data.data);
    console.log(userList)

    return thunkAPI.fulfillWithValue(userList)}
);

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(ProfileThunk.fulfilled, (state, action) => {
            console.log(state.profile)
            console.log(action)
        });
    }
  });
  
  // export const { userSlice } = userSlice.actions;
  export default profileSlice.reducer;
  