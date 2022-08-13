import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const checkEmailThunk = createAsyncThunk(
    "user/checkEmailThunk"
)

const changeName = createSlice({
  name: 'name',
  initialState: initialState,
  reducers: {},
});

export const { changename } = changeName.actions;
export default changeName.reducer;
