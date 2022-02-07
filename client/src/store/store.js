import { applyMiddleware, combineReducers, createStore } from 'redux';

import thunk from 'redux-thunk';

import { userReducer } from './reducers/UserReducers';

const rootReducer = combineReducers({
  user: userReducer
});

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
