import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './modules/user';
import comment from './modules/comment';
import movieSlice from './modules/movieList';

const store = configureStore({
  reducer: { user, movieList: movieSlice, comment },
});

export default store;
