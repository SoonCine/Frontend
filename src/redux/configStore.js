import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './modules/user';
import comment from './modules/comment';
import movieList from './modules/movieList';
import movieListDetail from './modules/movieListDetail';
import profile from './modules/profile';

const store = configureStore({
  reducer: { user, movieList, comment, movieListDetail,profile },
});

export default store;
