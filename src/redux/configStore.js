import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './modules/user';
import movie from './modules/movie';
import comment from './modules/comment';

const store = configureStore({ reducer: { user, movie, comment } });

export default store;
