import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const checkEmailThunk = createAsyncThunk(
  'user/checkEmailThunk',
  async (payload, thunkAPI) => {
    console.log(payload);
    const resData = await axios
      .post('http://localhost:3001/posts', payload.userName)
      .then((res) => res.data);

    // return thunkAPI.fulfillWithValue(resData);
    return payload;
  }
);

const userSlice = createSlice({
  name: 'name',
  initialState: initialState,
  reducers: {},
});

// export const { userSlice } = userSlice.actions;
export default userSlice.reducer;
