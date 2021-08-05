import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import tasksSlice from './tasksReducer';

const rootReducer = combineReducers({
  tasks: tasksSlice,
});

export const storeToolkit = configureStore({
  reducer: rootReducer,
});
