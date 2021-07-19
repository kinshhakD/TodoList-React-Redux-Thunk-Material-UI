import { combineReducers } from 'redux';
import { tasksReducer } from './Reducers/tasksReducer';

export const RootReducer = combineReducers({ tasks: tasksReducer });
