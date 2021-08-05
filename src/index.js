import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { storeToolkit } from './reduxToolkit/store';
// import store from './redux';

ReactDOM.render(
  <Provider store={storeToolkit}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
