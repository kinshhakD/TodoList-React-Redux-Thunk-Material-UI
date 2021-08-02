import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { tasksReducer } from './redux/Reducers/tasksReducer';

export const renderWithRedux = (component,
  { initialState, store = createStore(tasksReducer, initialState) } = {}) => ({
  ...render(<Provider store={store}>{component}</Provider>),
});
