import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './modules/user';
import movieSlice from './modules/movieList';

const store = configureStore({
  reducer: { user, movieList: movieSlice },
});

export default store;
