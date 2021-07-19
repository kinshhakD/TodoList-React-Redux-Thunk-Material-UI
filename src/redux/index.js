import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { RootReducer } from './store';

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
