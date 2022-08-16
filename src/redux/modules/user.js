import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const checkEmailThunk = createAsyncThunk(
  'user/checkEmailThunk',
  async (payload, thunkAPI) => {
console.log(payload)
    // axios.post('http://localhost:8080/api/member/signup',payload)

    return thunkAPI.fulfillWithValue();
  }
);

const userSlice = createSlice({
  name: 'name',
  initialState: initialState,
  reducers: {},
});

// export const { userSlice } = userSlice.actions;
export default userSlice.reducer;
